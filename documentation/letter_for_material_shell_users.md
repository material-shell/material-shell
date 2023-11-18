Dear Material Shell users,

I would like to provide additional context regarding recent changes to our project and community.

At present, most mainstream computer environments adhere to the desktop metaphor, envisioning the screen as the top of a writing desk where applications are placed, much like paper documents. Material Shell, however, diverges from this metaphor, introducing an innovative workflow that seamlessly aligns with our natural sense of direction, facilitating more intuitive navigation and organization of applications.

Four years ago, I made the decision to develop Material Shell as a Gnome Shell extension, believing it to be the best way to make it accessible and discoverable for a broad audience due to Gnome's widespread popularity. However, implementing such a significant overhaul using the Gnome Shell Extension system presented considerable challenges.

For those unfamiliar, Material Shell involves modifying Gnome Shell components through the application of monkey patches. These patches entail dynamic alterations of a class or module at runtime, driven by the intention to patch existing third-party code as a workaround for features that do not behave as desired.

This approach led to the following constraints:

-   Our modifications target a specific version of Gnome Shell, necessitating updates to our patches if code modifications are made, requiring regular extension rewrites.
-   Maintaining patches that dynamically target different Gnome versions simultaneously is highly challenging.
-   Collisions may occur if any other extension patches the same part of the code as us, resulting in system breakdown.
-   Our field of action is limited and has been reduced in the latest versions, constraining the features available to us.

The lack of stability in Material Shell is not related to our codebase, and if you haven't seen many new features lately, it's not due to a lack of ideas. As we added features, maintaining the project over time became increasingly difficult.

Despite the significant refactoring required for Gnome 45 compatibility, we have released the update.

Due to our conviction in the innovation behind the Material Shell Workflow, our frustration with the limitations on our evolution, and my dissatisfaction with the current project status, I have decided to embark on a new journey.

Firstly, I seek to unite Material Shell users and build a community of open-source enthusiasts eager to contribute to and fund innovative projects. I am reaching out to the [Free Explorers](https://opencollective.com/free-explorers), the Fearsome Pioneers exploring the unknown realms of the digital world, to join me in carving new paths for mankind.

To support this initiative, I intend to create the best tool for us – [Veshell](https://github.com/free-explorers/veshell), a powerful vessel for exploring and navigating the digital wilderness. [Veshell](https://github.com/free-explorers/veshell), a standalone Wayland compositor powered by Flutter and Smithay, will unlock the full potential of the Material Shell workflow while offering a more stable approach.

Godspeed, everyone ⛵.  
PapyElGringo
