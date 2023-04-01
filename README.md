# mq

Create easily media queries when styling in any CSS-in-JS library.

## Installation

Install `mq` with npm or yarn

```bash
  npm install @watfiree/mq
  yarn add @watfiree/mq
```

## Usage/Examples

### With default config

```typescript
import styled from "styled-components";
import { mq } from "@watfiree/mq";

const ModalWrapper = styled.div`
  background: black;
  color: white;

  ${mq.from("xs")} {
    background: grey;
    color: darkgrey;
  }

  ${mq.between("sm", "xl")} {
    background: white;
    color: black;
  }
`;
```

### With your custom config

```typescript
import styled from "styled-components";
import { createMqEntity } from "@watfiree/mq";

type myNewBreakponts = "wd" | "ws"; // can be also enum

const mq = createMqEntity<myNewBreakponts>({ wd: "2000px", ws: "1200px" });

const ModalWrapper = styled.div`
  background: black;
  color: white;

  ${mq.from("wd")} {
    background: grey;
    color: darkgrey;
  }

  ${mq.between("ws", "wd")} {
    background: white;
    color: black;
  }
`;
```
