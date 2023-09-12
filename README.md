# The recoil.org main website

The main project to build the website on https://recoil.org/

# Development

This uses SvelteKit. To run the stack in development mode, run:

`docker-compose up`

This will give you a local server available at [localhost:5173](http://localhost:5173), and has provision for HMR.

# Deployment

To build the static site and copy the contents into the `build/` folder, run:

`docker-compose run web npm run build`

and to test the files, run:

`python3 -m http.server -d build/ 8080`

