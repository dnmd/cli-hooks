[CLI Hooks `ionic:watch:before` is blocking ionic serve](https://github.com/ionic-team/ionic-cli/issues/2661)

### First

```bash
$ npm install
```
---

### Non-blocking behaviour

```bash
$ npm start
```

This will executed both the `prestart` and `start` script.

---

### Blocking behaviour

```bash
$ ionic serve
```

This will **only** execute the `ionic:watch:before` script.