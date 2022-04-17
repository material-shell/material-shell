import { parse, print } from "recast";
import { walk } from 'estree-walker';
import {BaseNode, Program, ClassDeclaration, Identifier, MethodDefinition, SimpleCallExpression, BlockStatement, ClassExpression, ExpressionStatement, AssignmentExpression, FunctionDeclaration, ArrayExpression, ImportDeclaration, VariableDeclaration, ImportSpecifier} from 'estree';
import { glob } from 'glob';
import * as fs from 'fs';
import { ASTNode } from "ast-types";

/// Test case that this script should pass.
/// It should transpile `testInput` to `testOutput`.
/// Note: Typescript generates the `= TestClass_1` sometimes if you use `TestClass` as a value (not a type) inside the class.
const testInput = `
import * as GLib from 'glib';
import { a, b } from 'glib';
var TestClass_1;

let TestClass = TestClass_1 = class TestClass extends Clutter.Actor {
    constructor(params) {
        super(params);
        // This is a test comment
    }
};

TestClass = TestClass_1 = __decorate([
    registerGObjectClass
], TestClass);
`;

const testOutput = `
const GLib = imports.gi.GLib;
const { a, b } = imports.gi.GLib;
var TestClass_1;

let TestClass = TestClass_1 = class TestClass extends Clutter.Actor {
    _init(params) {
        super._init(params);
        // This is a test comment
    }
};

TestClass = TestClass_1 = __decorate([
    registerGObjectClass
], TestClass);
`;


function test() {
    const output = print(transpile(parse(convertImports(testInput)))).code;
    if (output !== testOutput) {
        throw `Test failed\n\nInput: ${testInput}\n\nExpected Output: ${testOutput}\n\nActual Output: ${output}`;
    }
}

test();

function isProgram(arg: BaseNode): arg is Program {
    return arg.type == "Program";
}

function isImportDeclaration(arg: BaseNode): arg is ImportDeclaration {
    return arg.type == "ImportDeclaration";
}

function isImportSpecifier(arg: BaseNode): arg is ImportSpecifier {
    return arg.type == "ImportSpecifier";
}

function isClassDeclaration(arg: BaseNode): arg is ClassDeclaration {
    return arg.type == "ClassDeclaration";
}

function isClassExpression(arg: BaseNode): arg is ClassExpression {
    return arg.type == "ClassExpression";
}

function isBlockStatement(arg: BaseNode): arg is BlockStatement {
    return arg.type == "BlockStatement";
}

function isFunctionDeclaration(arg: BaseNode): arg is FunctionDeclaration {
    return arg.type == "FunctionDeclaration";
}

function isSimpleCallExpression(arg: BaseNode): arg is SimpleCallExpression {
    return arg.type == "CallExpression";
}

function isExpressionStatement(arg: BaseNode): arg is ExpressionStatement {
    return arg.type == "ExpressionStatement";
}

function isAssignmentExpression(arg: BaseNode): arg is AssignmentExpression {
    return arg.type == "AssignmentExpression";
}

function isMethodDefinition(arg: BaseNode): arg is MethodDefinition {
    return arg.type == "MethodDefinition";
}

function isIdentifier(arg: BaseNode): arg is Identifier {
    return arg.type == "Identifier";
}

function isArrayExpression(arg: BaseNode): arg is ArrayExpression {
    return arg.type == "ArrayExpression";
}

/** The name of the decorated class if it's a block on the form
...
... = __decorate([registerGObjectClass, ...], NameOfDecoratedClass);
...
*/
function getDecoratorTargets(node: BaseNode): string[] | null {
    if (isBlockStatement(node) || isProgram(node)) {
        let targets = [];
        for (let child of node.body) {
            if (!isExpressionStatement(child)) continue;
            if (!isAssignmentExpression(child.expression)) continue;
            let rhs = child.expression.right;

            // Essentially go from expressions on the form `a = b = c = d` to `a = d`
            while (isAssignmentExpression(rhs)) rhs = rhs.right;

            if (!isSimpleCallExpression(rhs)) continue;
            if (!isIdentifier(rhs.callee)) continue;

            if (rhs.callee.name != "__decorate") continue;

            let args = rhs.arguments;
            if (args.length != 2) continue;

            let decoratorFunctions = args[0];
            if (!isArrayExpression(decoratorFunctions)) continue;
            
            const gObjectDecorator = decoratorFunctions.elements.find(item => {
                return isIdentifier(item) && item.name == "registerGObjectClass";
            });
            if (gObjectDecorator === undefined) continue;

            let targetClass = args[1];
            if (!isIdentifier(targetClass)) continue;

            targets.push(targetClass.name);
        }
        return targets;
    }
    return null;
}

/// Converts imports on the form
/// import * from 'source'
/// and
/// import { a, b, c } from 'source'
///
/// to
///
/// const Source = imports.gi;
/// and
/// const { a, b, c } = imports.gi.Source;
function convertImports(text: string) {
    const giImports = [
        ["clutter", "imports.gi.Clutter"],
        ["cogl", "imports.gi.Cogl"],
        ["gdk", "imports.gi.Gdk"],
        ["gio", "imports.gi.Gio"],
        ["glib", "imports.gi.GLib"],
        ["gnomedesktop", "imports.gi.GnomeDesktop"],
        ["gobject", "imports.gi.GObject"],
        ["gtk", "imports.gi.Gtk"],
        ["meta", "imports.gi.Meta"],
        ["shell", "imports.gi.Shell"],
        ["soup", "imports.gi.Soup"],
        ["st", "imports.gi.St"],
        ["gjs", "imports"],
        ["ui", "imports.ui"],
    ];

    const regexes: [RegExp, string][] = giImports.map(x => {
        const [name, importpath] = x;
        return [
            new RegExp("import \\* as ([\\w\\d]+) from ['\"]" + name + "['\"];", "g"),
            "const $1 = " + importpath + ";"
        ]
    });

    const regexes2: [RegExp, string][] = giImports.map(x => {
        const [name, importpath] = x;
        return [
            new RegExp("import \\{([^\\}]+)\\} from ['\"]" + name + "['\"];", "g"),
            "const {$1} = " + importpath + ";"
        ]
    });

    const regexes3: [RegExp, string][] = giImports.map(x => {
        const [name, importpath] = x;
        return [
            new RegExp(`(const {.+) as (.+} = ${importpath};)`, "g"),
            "$1: $2"
        ]
    });

    for (let regex of regexes) {
        text = text.replace(regex[0], regex[1]);
    }

    for (let regex of regexes2) {
        text = text.replace(regex[0], regex[1]);
    }

    for (let i = 0; i < 3; i++) {
        for (let regex of regexes3) {
            text = text.replace(regex[0], regex[1]);
        }
    }

    return text;
}
function transpile(ast: BaseNode) {

    let insideClass = false;
    let decoratedClasses = [];

    // Find all classes that have been decorated with @registerGObjectClass
    walk( ast, {
        enter: function ( node, parent, prop, index ) {
            let decoratedNames = getDecoratorTargets(node);
            if (decoratedNames !== null) {
                for (let name of decoratedNames) {
                    decoratedClasses.push(name);
                }
            }
        },
        leave: function(node, parent, prop, index) {}
    });
    
    walk( ast, {
        enter: function ( node, parent, prop, index ) {
            if (isClassExpression(node)) {
                if (decoratedClasses.indexOf(node.id.name) !== -1) {
                    insideClass = true;
                }
            }

            if (insideClass) {
                if (isMethodDefinition(node) && node.kind == "constructor") {
                    if (isIdentifier(node.key)) {
                        // We have found a constructor, change it to a normal method named `_init`
                        node.kind = "method";
                        node.key.name = "_init";
                    }
                }
                if (isSimpleCallExpression(node)) {
                    if (node.callee.type == "Super") {
                        // We found a `super(...)` call
                        // Change it to `super._init(...)`
                        node.callee = {
                            type: "MemberExpression",
                            object: node.callee,
                            property: {
                                type: "Identifier",
                                name: "_init",
                            },
                            computed: false,
                            optional: false,
                        }
                    }
                }
            }
        },
        leave: function ( node, parent, prop, index ) {
            if (isClassExpression(node)) {
                if (decoratedClasses.indexOf(node.id.name) !== -1) {
                    console.assert(insideClass);
                    insideClass = false;
                }
            }
        }
    });

    return ast;
}

glob("build/**/*.js", {}, (er, files) => {
    for (let file of files) {
        let text = fs.readFileSync(file).toString();
        text = convertImports(text);
        // Parse it into an AST
        let ast: ASTNode;
        try {
            ast = parse(text);
        } catch(e) {
            console.log(`Failed to parse ${file}`);
            console.log("Writing converted text to temp.js");
            fs.writeFileSync("temp.js", text);
            throw e;
        }
        // Change the things we want to change
        transpile(ast);
        // Convert it back into a string
        const formattedCode = print(ast).code;
        fs.writeFileSync(file, formattedCode);
    }
});
