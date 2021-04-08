/**
 * Graphene 1.0
 *
 * Generated from 1.0
 */

import * as GObject from "@gi-types/gobject";

export const HAS_GCC: number;
export const HAS_SCALAR: number;
export const HAS_SSE: number;
export const PI: number;
export const PI_2: number;
export const SIMD_S: string;
export const VEC2_LEN: number;
export const VEC3_LEN: number;
export const VEC4_LEN: number;
export const __false: number;
export const __true: number;
export function box_empty(): Box;
export function box_infinite(): Box;
export function box_minus_one(): Box;
export function box_one(): Box;
export function box_one_minus_one(): Box;
export function box_zero(): Box;
export function point3d_zero(): Point3D;
export function point_zero(): Point;
export function rect_alloc(): Rect;
export function rect_zero(): Rect;
export function size_zero(): Size;
export function vec2_one(): Vec2;
export function vec2_x_axis(): Vec2;
export function vec2_y_axis(): Vec2;
export function vec2_zero(): Vec2;
export function vec3_one(): Vec3;
export function vec3_x_axis(): Vec3;
export function vec3_y_axis(): Vec3;
export function vec3_z_axis(): Vec3;
export function vec3_zero(): Vec3;
export function vec4_one(): Vec4;
export function vec4_w_axis(): Vec4;
export function vec4_x_axis(): Vec4;
export function vec4_y_axis(): Vec4;
export function vec4_z_axis(): Vec4;
export function vec4_zero(): Vec4;

export namespace EulerOrder {
    export const $gtype: GObject.GType<EulerOrder>;
}

export enum EulerOrder {
    DEFAULT = -1,
    XYZ = 0,
    YZX = 1,
    ZXY = 2,
    XZY = 3,
    YXZ = 4,
    ZYX = 5,
    SXYZ = 6,
    SXYX = 7,
    SXZY = 8,
    SXZX = 9,
    SYZX = 10,
    SYZY = 11,
    SYXZ = 12,
    SYXY = 13,
    SZXY = 14,
    SZXZ = 15,
    SZYX = 16,
    SZYZ = 17,
    RZYX = 18,
    RXYX = 19,
    RYZX = 20,
    RXZX = 21,
    RXZY = 22,
    RYZY = 23,
    RZXY = 24,
    RYXY = 25,
    RYXZ = 26,
    RZXZ = 27,
    RXYZ = 28,
    RZYZ = 29,
}

export class Box {
    static $gtype: GObject.GType<Box>;

    constructor();
    constructor(
        properties?: Partial<{
            min?: Vec3;
            max?: Vec3;
        }>
    );
    constructor(copy: Box);

    // Fields
    min: Vec3;
    max: Vec3;

    // Constructors
    static alloc(): Box;

    // Members
    contains_box(b: Box): boolean;
    contains_point(point: Point3D): boolean;
    equal(b: Box): boolean;
    expand(point: Point3D): Box;
    expand_scalar(scalar: number): Box;
    expand_vec3(vec: Vec3): Box;
    free(): void;
    get_bounding_sphere(): Sphere;
    get_center(): Point3D;
    get_depth(): number;
    get_height(): number;
    get_max(): Point3D;
    get_min(): Point3D;
    get_size(): Vec3;
    get_vertices(): Vec3[];
    get_width(): number;
    init(min?: Point3D | null, max?: Point3D | null): Box;
    init_from_box(src: Box): Box;
    init_from_points(points: Point3D[]): Box;
    init_from_vec3(min?: Vec3 | null, max?: Vec3 | null): Box;
    init_from_vectors(vectors: Vec3[]): Box;
    intersection(b: Box): [boolean, Box | null];
    union(b: Box): Box;
    static empty(): Box;
    static infinite(): Box;
    static minus_one(): Box;
    static one(): Box;
    static one_minus_one(): Box;
    static zero(): Box;
}

export class Euler {
    static $gtype: GObject.GType<Euler>;

    constructor();
    constructor(copy: Euler);

    // Fields
    angles: Vec3;
    order: EulerOrder;

    // Constructors
    static alloc(): Euler;

    // Members
    equal(b: Euler): boolean;
    free(): void;
    get_alpha(): number;
    get_beta(): number;
    get_gamma(): number;
    get_order(): EulerOrder;
    get_x(): number;
    get_y(): number;
    get_z(): number;
    init(x: number, y: number, z: number): Euler;
    init_from_euler(src?: Euler | null): Euler;
    init_from_matrix(m: Matrix | null, order: EulerOrder): Euler;
    init_from_quaternion(q: Quaternion | null, order: EulerOrder): Euler;
    init_from_vec3(v: Vec3 | null, order: EulerOrder): Euler;
    init_with_order(x: number, y: number, z: number, order: EulerOrder): Euler;
    reorder(order: EulerOrder): Euler;
    to_matrix(): Matrix;
    to_quaternion(): Quaternion;
    to_vec3(): Vec3;
}

export class Frustum {
    static $gtype: GObject.GType<Frustum>;

    constructor();
    constructor(copy: Frustum);

    // Fields
    planes: Plane[];

    // Constructors
    static alloc(): Frustum;

    // Members
    contains_point(point: Point3D): boolean;
    equal(b: Frustum): boolean;
    free(): void;
    get_planes(): Plane[];
    init(p0: Plane, p1: Plane, p2: Plane, p3: Plane, p4: Plane, p5: Plane): Frustum;
    init_from_frustum(src: Frustum): Frustum;
    init_from_matrix(matrix: Matrix): Frustum;
    intersects_box(box: Box): boolean;
    intersects_sphere(sphere: Sphere): boolean;
}

export class Matrix {
    static $gtype: GObject.GType<Matrix>;

    constructor();
    constructor(
        properties?: Partial<{
            value?: Simd4X4F;
        }>
    );
    constructor(copy: Matrix);

    // Fields
    value: Simd4X4F;

    // Constructors
    static alloc(): Matrix;

    // Members
    determinant(): number;
    equal(b: Matrix): boolean;
    equal_fast(b: Matrix): boolean;
    free(): void;
    get_row(index_: number): Vec4;
    get_value(row: number, col: number): number;
    get_x_scale(): number;
    get_x_translation(): number;
    get_y_scale(): number;
    get_y_translation(): number;
    get_z_scale(): number;
    get_z_translation(): number;
    init_from_2d(xx: number, yx: number, xy: number, yy: number, x_0: number, y_0: number): Matrix;
    init_from_float(v: number[]): Matrix;
    init_from_matrix(src: Matrix): Matrix;
    init_from_vec4(v0: Vec4, v1: Vec4, v2: Vec4, v3: Vec4): Matrix;
    init_frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): Matrix;
    init_identity(): Matrix;
    init_look_at(eye: Vec3, center: Vec3, up: Vec3): Matrix;
    init_ortho(left: number, right: number, top: number, bottom: number, z_near: number, z_far: number): Matrix;
    init_perspective(fovy: number, aspect: number, z_near: number, z_far: number): Matrix;
    init_rotate(angle: number, axis: Vec3): Matrix;
    init_scale(x: number, y: number, z: number): Matrix;
    init_skew(x_skew: number, y_skew: number): Matrix;
    init_translate(p: Point3D): Matrix;
    interpolate(b: Matrix, factor: number): Matrix;
    inverse(): [boolean, Matrix];
    is_2d(): boolean;
    is_backface_visible(): boolean;
    is_identity(): boolean;
    is_singular(): boolean;
    multiply(b: Matrix): Matrix;
    near(b: Matrix, epsilon: number): boolean;
    normalize(): Matrix;
    perspective(depth: number): Matrix;
    print(): void;
    project_point(p: Point): Point;
    project_rect(r: Rect): Quad;
    project_rect_bounds(r: Rect): Rect;
    rotate(angle: number, axis: Vec3): void;
    rotate_euler(e: Euler): void;
    rotate_quaternion(q: Quaternion): void;
    rotate_x(angle: number): void;
    rotate_y(angle: number): void;
    rotate_z(angle: number): void;
    scale(factor_x: number, factor_y: number, factor_z: number): void;
    skew_xy(factor: number): void;
    skew_xz(factor: number): void;
    skew_yz(factor: number): void;
    to_2d(): [boolean, number, number, number, number, number, number];
    to_float(): number[];
    transform_bounds(r: Rect): Rect;
    transform_box(b: Box): Box;
    transform_point(p: Point): Point;
    transform_point3d(p: Point3D): Point3D;
    transform_ray(r: Ray): Ray;
    transform_rect(r: Rect): Quad;
    transform_sphere(s: Sphere): Sphere;
    transform_vec3(v: Vec3): Vec3;
    transform_vec4(v: Vec4): Vec4;
    translate(pos: Point3D): void;
    transpose(): Matrix;
    unproject_point3d(modelview: Matrix, point: Point3D): Point3D;
    untransform_bounds(r: Rect, bounds: Rect): Rect;
    untransform_point(p: Point, bounds: Rect): [boolean, Point];
}

export class Plane {
    static $gtype: GObject.GType<Plane>;

    constructor();
    constructor(
        properties?: Partial<{
            normal?: Vec3;
            constant?: number;
        }>
    );
    constructor(copy: Plane);

    // Fields
    normal: Vec3;
    constant: number;

    // Constructors
    static alloc(): Plane;

    // Members
    distance(point: Point3D): number;
    equal(b: Plane): boolean;
    free(): void;
    get_constant(): number;
    get_normal(): Vec3;
    init(normal: Vec3 | null, constant: number): Plane;
    init_from_plane(src: Plane): Plane;
    init_from_point(normal: Vec3, point: Point3D): Plane;
    init_from_points(a: Point3D, b: Point3D, c: Point3D): Plane;
    init_from_vec4(src: Vec4): Plane;
    negate(): Plane;
    normalize(): Plane;
}

export class Point {
    static $gtype: GObject.GType<Point>;

    constructor();
    constructor(
        properties?: Partial<{
            x?: number;
            y?: number;
        }>
    );
    constructor(copy: Point);

    // Fields
    x: number;
    y: number;

    // Constructors
    static alloc(): Point;

    // Members
    distance(b: Point): [number, number | null, number | null];
    equal(b: Point): boolean;
    free(): void;
    init(x: number, y: number): Point;
    init_from_point(src: Point): Point;
    init_from_vec2(src: Vec2): Point;
    interpolate(b: Point, factor: number): Point;
    near(b: Point, epsilon: number): boolean;
    to_vec2(): Vec2;
    static zero(): Point;
}

export class Point3D {
    static $gtype: GObject.GType<Point3D>;

    constructor();
    constructor(
        properties?: Partial<{
            x?: number;
            y?: number;
            z?: number;
        }>
    );
    constructor(copy: Point3D);

    // Fields
    x: number;
    y: number;
    z: number;

    // Constructors
    static alloc(): Point3D;

    // Members
    cross(b: Point3D): Point3D;
    distance(b: Point3D): [number, Vec3 | null];
    dot(b: Point3D): number;
    equal(b: Point3D): boolean;
    free(): void;
    init(x: number, y: number, z: number): Point3D;
    init_from_point(src: Point3D): Point3D;
    init_from_vec3(v: Vec3): Point3D;
    interpolate(b: Point3D, factor: number): Point3D;
    length(): number;
    near(b: Point3D, epsilon: number): boolean;
    normalize(): Point3D;
    normalize_viewport(viewport: Rect, z_near: number, z_far: number): Point3D;
    scale(factor: number): Point3D;
    to_vec3(): Vec3;
    static zero(): Point3D;
}

export class Quad {
    static $gtype: GObject.GType<Quad>;

    constructor();
    constructor(copy: Quad);

    // Fields
    points: Point[];

    // Constructors
    static alloc(): Quad;

    // Members
    bounds(): Rect;
    contains(p: Point): boolean;
    free(): void;
    get_point(index_: number): Point;
    init(p1: Point, p2: Point, p3: Point, p4: Point): Quad;
    init_from_points(points: Point[]): Quad;
    init_from_rect(r: Rect): Quad;
}

export class Quaternion {
    static $gtype: GObject.GType<Quaternion>;

    constructor();
    constructor(
        properties?: Partial<{
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        }>
    );
    constructor(copy: Quaternion);

    // Fields
    x: number;
    y: number;
    z: number;
    w: number;

    // Constructors
    static alloc(): Quaternion;

    // Members
    dot(b: Quaternion): number;
    equal(b: Quaternion): boolean;
    free(): void;
    init(x: number, y: number, z: number, w: number): Quaternion;
    init_from_angle_vec3(angle: number, axis: Vec3): Quaternion;
    init_from_angles(deg_x: number, deg_y: number, deg_z: number): Quaternion;
    init_from_euler(e: Euler): Quaternion;
    init_from_matrix(m: Matrix): Quaternion;
    init_from_quaternion(src: Quaternion): Quaternion;
    init_from_radians(rad_x: number, rad_y: number, rad_z: number): Quaternion;
    init_from_vec4(src: Vec4): Quaternion;
    init_identity(): Quaternion;
    invert(): Quaternion;
    normalize(): Quaternion;
    slerp(b: Quaternion, factor: number): Quaternion;
    to_angle_vec3(): [number, Vec3];
    to_angles(): [number | null, number | null, number | null];
    to_matrix(): Matrix;
    to_radians(): [number | null, number | null, number | null];
    to_vec4(): Vec4;
}

export class Ray {
    static $gtype: GObject.GType<Ray>;

    constructor();
    constructor(
        properties?: Partial<{
            origin?: Vec3;
            direction?: Vec3;
        }>
    );
    constructor(copy: Ray);

    // Fields
    origin: Vec3;
    direction: Vec3;

    // Constructors
    static alloc(): Ray;

    // Members
    equal(b: Ray): boolean;
    free(): void;
    get_closest_point_to_point(p: Point3D): Point3D;
    get_direction(): Vec3;
    get_distance_to_plane(p: Plane): number;
    get_distance_to_point(p: Point3D): number;
    get_origin(): Point3D;
    get_position_at(t: number): Point3D;
    init(origin?: Point3D | null, direction?: Vec3 | null): Ray;
    init_from_ray(src: Ray): Ray;
    init_from_vec3(origin?: Vec3 | null, direction?: Vec3 | null): Ray;
}

export class Rect {
    static $gtype: GObject.GType<Rect>;

    constructor(
        properties?: Partial<{
            origin?: Point;
            size?: Size;
        }>
    );
    constructor(copy: Rect);

    // Fields
    origin: Point;
    size: Size;

    // Members
    contains_point(p: Point): boolean;
    contains_rect(b: Rect): boolean;
    equal(b: Rect): boolean;
    expand(p: Point): Rect;
    free(): void;
    get_area(): number;
    get_bottom_left(): Point;
    get_bottom_right(): Point;
    get_center(): Point;
    get_height(): number;
    get_top_left(): Point;
    get_top_right(): Point;
    get_vertices(): Vec2[];
    get_width(): number;
    get_x(): number;
    get_y(): number;
    init(x: number, y: number, width: number, height: number): Rect;
    init_from_rect(src: Rect): Rect;
    inset(d_x: number, d_y: number): Rect;
    inset_r(d_x: number, d_y: number): Rect;
    interpolate(b: Rect, factor: number): Rect;
    intersection(b: Rect): [boolean, Rect | null];
    normalize(): Rect;
    normalize_r(): Rect;
    offset(d_x: number, d_y: number): Rect;
    offset_r(d_x: number, d_y: number): Rect;
    round(): Rect;
    round_extents(): Rect;
    round_to_pixel(): Rect;
    scale(s_h: number, s_v: number): Rect;
    union(b: Rect): Rect;
    static alloc(): Rect;
    static zero(): Rect;
}

export class Simd4F {
    static $gtype: GObject.GType<Simd4F>;

    constructor(
        properties?: Partial<{
            x?: number;
            y?: number;
            z?: number;
            w?: number;
        }>
    );
    constructor(copy: Simd4F);

    // Fields
    x: number;
    y: number;
    z: number;
    w: number;
}

export class Simd4X4F {
    static $gtype: GObject.GType<Simd4X4F>;

    constructor(
        properties?: Partial<{
            x?: Simd4F;
            y?: Simd4F;
            z?: Simd4F;
            w?: Simd4F;
        }>
    );
    constructor(copy: Simd4X4F);

    // Fields
    x: Simd4F;
    y: Simd4F;
    z: Simd4F;
    w: Simd4F;
}

export class Size {
    static $gtype: GObject.GType<Size>;

    constructor();
    constructor(
        properties?: Partial<{
            width?: number;
            height?: number;
        }>
    );
    constructor(copy: Size);

    // Fields
    width: number;
    height: number;

    // Constructors
    static alloc(): Size;

    // Members
    equal(b: Size): boolean;
    free(): void;
    init(width: number, height: number): Size;
    init_from_size(src: Size): Size;
    interpolate(b: Size, factor: number): Size;
    scale(factor: number): Size;
    static zero(): Size;
}

export class Sphere {
    static $gtype: GObject.GType<Sphere>;

    constructor();
    constructor(
        properties?: Partial<{
            center?: Vec3;
            radius?: number;
        }>
    );
    constructor(copy: Sphere);

    // Fields
    center: Vec3;
    radius: number;

    // Constructors
    static alloc(): Sphere;

    // Members
    contains_point(point: Point3D): boolean;
    distance(point: Point3D): number;
    equal(b: Sphere): boolean;
    free(): void;
    get_bounding_box(): Box;
    get_center(): Point3D;
    get_radius(): number;
    init(center: Point3D | null, radius: number): Sphere;
    init_from_points(points: Point3D[], center?: Point3D | null): Sphere;
    init_from_vectors(vectors: Vec3[], center?: Point3D | null): Sphere;
    is_empty(): boolean;
    translate(point: Point3D): Sphere;
}

export class Triangle {
    static $gtype: GObject.GType<Triangle>;

    constructor();
    constructor(
        properties?: Partial<{
            a?: Vec3;
            b?: Vec3;
            c?: Vec3;
        }>
    );
    constructor(copy: Triangle);

    // Fields
    a: Vec3;
    b: Vec3;
    c: Vec3;

    // Constructors
    static alloc(): Triangle;

    // Members
    contains_point(p: Point3D): boolean;
    equal(b: Triangle): boolean;
    free(): void;
    get_area(): number;
    get_barycoords(p: Point3D | null): [boolean, Vec2];
    get_bounding_box(): Box;
    get_midpoint(): Point3D;
    get_normal(): Vec3;
    get_plane(): Plane;
    get_points(): [Point3D | null, Point3D | null, Point3D | null];
    get_vertices(): [Vec3 | null, Vec3 | null, Vec3 | null];
    init_from_point3d(a?: Point3D | null, b?: Point3D | null, c?: Point3D | null): Triangle;
    init_from_vec3(a?: Vec3 | null, b?: Vec3 | null, c?: Vec3 | null): Triangle;
}

export class Vec2 {
    static $gtype: GObject.GType<Vec2>;

    constructor();
    constructor(
        properties?: Partial<{
            value?: Simd4F;
        }>
    );
    constructor(copy: Vec2);

    // Fields
    value: Simd4F;

    // Constructors
    static alloc(): Vec2;

    // Members
    add(b: Vec2): Vec2;
    divide(b: Vec2): Vec2;
    dot(b: Vec2): number;
    equal(v2: Vec2): boolean;
    free(): void;
    get_x(): number;
    get_y(): number;
    init(x: number, y: number): Vec2;
    init_from_float(src: number[]): Vec2;
    init_from_vec2(src: Vec2): Vec2;
    length(): number;
    max(b: Vec2): Vec2;
    min(b: Vec2): Vec2;
    multiply(b: Vec2): Vec2;
    near(v2: Vec2, epsilon: number): boolean;
    negate(): Vec2;
    normalize(): Vec2;
    scale(factor: number): Vec2;
    subtract(b: Vec2): Vec2;
    to_float(): number[];
    static one(): Vec2;
    static x_axis(): Vec2;
    static y_axis(): Vec2;
    static zero(): Vec2;
}

export class Vec3 {
    static $gtype: GObject.GType<Vec3>;

    constructor();
    constructor(
        properties?: Partial<{
            value?: Simd4F;
        }>
    );
    constructor(copy: Vec3);

    // Fields
    value: Simd4F;

    // Constructors
    static alloc(): Vec3;

    // Members
    add(b: Vec3): Vec3;
    cross(b: Vec3): Vec3;
    divide(b: Vec3): Vec3;
    dot(b: Vec3): number;
    equal(v2: Vec3): boolean;
    free(): void;
    get_x(): number;
    get_xy(): Vec2;
    get_xy0(): Vec3;
    get_xyz0(): Vec4;
    get_xyz1(): Vec4;
    get_xyzw(w: number): Vec4;
    get_y(): number;
    get_z(): number;
    init(x: number, y: number, z: number): Vec3;
    init_from_float(src: number[]): Vec3;
    init_from_vec3(src: Vec3): Vec3;
    length(): number;
    max(b: Vec3): Vec3;
    min(b: Vec3): Vec3;
    multiply(b: Vec3): Vec3;
    near(v2: Vec3, epsilon: number): boolean;
    negate(): Vec3;
    normalize(): Vec3;
    scale(factor: number): Vec3;
    subtract(b: Vec3): Vec3;
    to_float(): number[];
    static one(): Vec3;
    static x_axis(): Vec3;
    static y_axis(): Vec3;
    static z_axis(): Vec3;
    static zero(): Vec3;
}

export class Vec4 {
    static $gtype: GObject.GType<Vec4>;

    constructor();
    constructor(
        properties?: Partial<{
            value?: Simd4F;
        }>
    );
    constructor(copy: Vec4);

    // Fields
    value: Simd4F;

    // Constructors
    static alloc(): Vec4;

    // Members
    add(b: Vec4): Vec4;
    divide(b: Vec4): Vec4;
    dot(b: Vec4): number;
    equal(v2: Vec4): boolean;
    free(): void;
    get_w(): number;
    get_x(): number;
    get_xy(): Vec2;
    get_xyz(): Vec3;
    get_y(): number;
    get_z(): number;
    init(x: number, y: number, z: number, w: number): Vec4;
    init_from_float(src: number[]): Vec4;
    init_from_vec2(src: Vec2, z: number, w: number): Vec4;
    init_from_vec3(src: Vec3, w: number): Vec4;
    init_from_vec4(src: Vec4): Vec4;
    length(): number;
    max(b: Vec4): Vec4;
    min(b: Vec4): Vec4;
    multiply(b: Vec4): Vec4;
    near(v2: Vec4, epsilon: number): boolean;
    negate(): Vec4;
    normalize(): Vec4;
    scale(factor: number): Vec4;
    subtract(b: Vec4): Vec4;
    to_float(): number[];
    static one(): Vec4;
    static w_axis(): Vec4;
    static x_axis(): Vec4;
    static y_axis(): Vec4;
    static z_axis(): Vec4;
    static zero(): Vec4;
}
