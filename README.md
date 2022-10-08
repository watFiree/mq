
# mq

Create easily media queries when styling in any CSS-in-JS library.
## Installation

Install `mq` with npm or yarn

```bash
  npm install @watfiree/mq
  yarn add @watfiree/mq
```
    
## Usage/Examples

```javascript
import styled from 'styled-components'

const ModalWrapper = styled.div`
    background: black;
    color: white;

    ${media.from('xs')} {
        background: grey;
        color: darkgrey;
    }

    ${media.between('sm', 'xl')} {
        background: white;
        color: black;
    }
`;
```


## Roadmap

- Open-source contribution utils (PR testing, auto deployment)
- Generate breakpoints and their values from the external file created by the user.

