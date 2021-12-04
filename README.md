# bitrath.com

## What is `bitrath.com` ?

The idea of 'bitrath.com' was born as a course project at my Computer Engineering BoS Degree at University Of Parma.

The concept behind it is very simple: my goal was to provide a full-stack website template aimed to the demographic of the Artists, like Photographers, Painters, etc...

These assumptions naturally led to a very basic scruture of the main components of this website into three categories:

- Portfolio
- Shop
- Blog

Being an amateur photographer myself, I decided to structure the entire project as my personal website. Therefore I had to exclude from the git repository every photo, due to copyright reasons.

Nontheless, you can implement your personal photos and data to make your own `bitrath.com` .

### bitrath.com/home

![Home](readme_images/screen1.png)

## bitrath.com -> FRONTEND

The frontend, also know as the Client Process of this project, is built upon `ReactJS`.

Some of the graphical components used are featured from the `MaterialUI` graphical framework, which lets you import dynamic and reactive components, that also make a Mobile View implementation more accesible.
I've also used `Framer-Motion` to implement a simple transition animation onto the Modal components.

The frontend communicates, retrieves and sends data to the backend thanks to AJAX. This is achieved with `Redux` and `Axios` libraries. The first one lets me manage and centralize the application state inside a 'store' box; the latter lets the store make simple HTTP Requests to the Server.

Next up, there are a couple of screenshots to show how the Client looks like.

### bitrath.com/portfolio

![Portfolio](readme_images/screen2.png)

### bitrath.com/shop

![Shop](readme_images/screen3.png)

### bitrath.com/blog

![Blog](readme_images/screen4.png)
