# Matchers

Дан массив с информацией о героях, например:

[
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]

В отсортированном порядке должно выглядеть следующим образом:

[
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
]

Убедитесь, что toBe работать не будет, но будет работать toEqual. Изучите документацию на toBe и toEqual и выясните в чём разница (а так же термин Deep Equality). Убедитесь, что вы обеспечили 100% покрытие тестами по строкам.


[![Build status](https://ci.appveyor.com/api/projects/status/s2c5y6mdgxtuu2nv?svg=true)](https://ci.appveyor.com/project/Q1unt/matchers)