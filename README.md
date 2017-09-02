# DavidLanding
Adaptive Website (Test task).
## Technologies

- [**Gulp**](http://gulpjs.com) - Automate and enhance your workflow
- [**Pug**](https://pugjs.org) - Terse language for writing HTML templates.
- [**Stylus**](http://stylus-lang.com) - CSS with superpowers.


## Requirements and Use
### Requirements

- [Node.js](https://nodejs.org/en/)
- [Gulp](http://gulpjs.com)

```bash
$ npm install -g gulp
```

### Use

```bash
$ git clone https://github.com/MarynaHapon/Chajka
$ npm install
$ gulp
```

## Tasks

```gulp```: Runs the **default task** (dev) including the following ones :

- ```styles```
- ```pug```
- ```scripts```
- ```img```
- ``svg``
- ``clean``
- ``fonts``
- ``serve``
- ``watch``

## Storing Data
**File** ``content.json`` :
```
"footer": {
  "text": "© 2016 Институт вертебрологии и реабилитации"
}
```

## Using Data
**File** ``footer.pug``

```
p= content.footer.text
```
**File** ``pug.js``

```
content: JSON.parse($.fs.readFileSync('./data/content.json', 'utf8'))
```
