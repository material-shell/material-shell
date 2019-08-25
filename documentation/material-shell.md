# Material-shell

A simple yet productivity oriented GNOME shell replacement that provide an innovante and automated mouse/keyboard workflow with the goal to be easier and faster to use and propose a great user experience.

Made by following the [Material Design guidelines](https://material.io) which help us to propose an aesthetic and accessible interface.

## Workflow

The workflow is the heart of the shell and everything was built around it. It's was designed to **simplify** navigation and **reduce** the need of windows **manipulations** to **improve productivity**.

The notion of application **categories** are an important part of our workflow. It's allow us to regroup apps by use-cases and group apps meant to be used together.

To **prevent reorganize** windows **manually** every time we start a new App or change activities Material-shell automatize this process by **automatically sizing and positioning** windows in a predictive way.

This can be visualized as a grid:

![app-grid](./app-grid.png)

Each **colored rows** represent a **category** and every **cell** an **application window** and at the center the white area represent the screen.

Every **new application** is **automatically positioned** inside this grid depending on it's category at the end of the row.

This allow us to propose an **intuitive navigation** flow by moving the screen around in this 2d context. Navigating **upward** and **downward** will change the current category and to the **left** and the **right** to change the current windows on screen.

## Interface

The interface is designed to represent the **state** of the **workflow** and provide **navigation** capabilities for **mouse** and **touchscreens**.

![interface](./interface.png)

The interface is divided in **two part**. 

On the **left** side there is all the **system** related informations.

On the **right** everything is related to the **active category**.

The two most important components are the **left panel** and the **top panel**.

#### System panel
The system panel is the main component of the system part of the interface and regroup sub-components:
* **Category switcher**: This component list all the categories available and the current selected one. It's allow us to navigate to a specific category by clicking on it.
* **System tray**: This list all the informations about the system, the network status, bluetooth connectivity, volume, battery and notifications informations.

#### Category panel
The category panel is the main component of the category part of the interface and regroup sub-components:
* **App switcher**: This component list all the application windows opened in the current category and the current selected one. It's allow us to navigate to a specific window by clicking on it.
* **Layout switcher**: This display the current layout of the category and can be clicked to switch to the next available layout.