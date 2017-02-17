# flexgrid

always use a container

limiter

responsive


xs-12
sm-8
md-6
lg-4


xs-off-2

nesting

Alignment
justify-content: flex-start | flex-end | center | space-between | space-around;

center-xs end-sm start-lg

PARENT

display: flex;
flex-direction: row | row-reverse | column | column-reverse;
flex-wrap: nowrap | wrap | wrap-reverse;
flex-flow: <‘flex-direction’> || <‘flex-wrap’> short hand for flex-direction and flex-wrap
justify-content: flex-start | flex-end | center | space-between | space-around;
align-items: flex-start | flex-end | center | baseline | stretch;
align-content: flex-start | flex-end | center | space-between | space-around | stretch;
align-content: flex-start | flex-end | center | space-between | space-around | stretch;


CHILDREN

order: <integer>;
flex-grow: <number>; /* default 0 */
flex-shrink: <number>; /* default 1 */
flex-basis: <length> | auto; /* default auto */
flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]  shorthand for flex-grow, flex-shrink and flex-basis
align-self: auto | flex-start | flex-end | center | baseline | stretch;
