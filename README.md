# @tluper94/React-gallery v1.0.7

React gallery is a simple gallery/carousel component for react

# Installation
 
 Using npm

```node
$ npm i @tluper94/react-gallery
```

# Usage

```jsx
import Gallery from '@tluper94/react-gallery/lib/Gallery';
```

React-gallery accept the following props

### Gallery Items 

Gallery items are children of the gallery component

Example:
```jsx
<Gallery
    width='500px'
    height='500px'
>
    <img/>
    <video/>
    <div>Example</div>
</Gallery>
```

### Width & Height 

width and height is required and accepts type 'string'

Example:
```jsx
<Gallery
    width='100px'
    heith='100px'
>
</Gallery>
```

### Controls

Controls prop is optional and accepts a type object {color: 'string', size: 'string', weight: 'string}

-color - can be any css color
-size - can be any css size 
-weight - 'thin', 'light', 'regular', 'bold', 'fill', 'duotone'

Example:
```jsx
<Gallery
    width='20vh'
    height='20vh'
    controls={color: '#fff', size: '2vw', weight: 'fill'}
>
<Gallery>
```

### Dots

Dots prop is optional and accepts a type object {color: 'string', size: 'string', inside: boolean}

-color - can be any css color
-size - can be any css size 
-inside - tru -- if true dots are on the inside of container else on the outside

Example:
```jsx
<Gallery
    width='100%'
    height='100%'
    dots={color: 'black', size: '20px' inside: true}
>
</Gallery>
