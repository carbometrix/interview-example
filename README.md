# Carbometrix Example

At Carbometrix, we're using Typescript. Great, but there are as much ways to write Typescript code as there are developers.

This repository is a (really) short overview of what kind of code we write at Carbometrix.

As you can see in `tsconfig.json`, we're using a pretty strict set of rules. We're using the `any` type and `as` keyword
as little as possible.

You can also notice we're using [tsl](https://github.com/ArnaudBarre/tsl) to add "type aware" lint rules and the ability to define
custom rules at project level.

During the interview, we mainly expect you to write code following these rules. **We don't expect you to be able to configure or explain how those rules work**.

We also tend to avoid mutations, and keep them at function level if we actually feel simpler to mutate a variable. Especially, I think we never mutate
arguments passed to functions (maybe there are some exceptions, but none come in mind right now).

We tend to use functional programming patterns, building pretty big _expressions_ (in opposition of _statements_), using e.g. method
chaining (mainly `.map`, `.filter`) and ternary operators (`condition ? valueIfTrue : valueIfFalse`).

Note that the rules combinations allow for "exhaustive switch cases checks": e.g. if you have a value `value: "foo" | "bar" | "baz"`, the following
code will trigger an error as `foo` is not covered by the switch case:

```ts
switch (value) {
  case "bar":
    break;
  case "baz":
    break;
}
```

Last but not least, we're pretty upset about `switch` being a _statement_ instead of an _expression_. So we often do something like this:

```ts
const score = (() => {
  switch (value) {
    case "foo":
      return 1;
    case "bar":
      return 2;
    case "baz":
      return 3;
  }
})();
```

## Run the code

Install the dependencies:

```sh
yarn install
```

Run the code (this file is a really short example, you're of course encouraged to experiment
how it fells writing with our rules):

```sh
bun src/index.ts
```

## What will have to do during the interview?

Come as you are, without your laptop. I'll have my laptop and you'll have to guide me writing
some code. We won't use any other dependency than what's in this repository. Even if we use AI at work,
we won't use it during the interview as we want to see how _you_ think.

We don't expect you to know everything about programming and computers, it's totally fine to
ask if you're not sure about something.

Please also note that we encourage you to challenge the specifications we'll give to you,
thinking about edge cases as if you were about to put the code in production.
