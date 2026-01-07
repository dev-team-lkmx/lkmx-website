# Space

Flare utiliza un sistema de espacios uniforme que fomenta la coherencia entre elementos de estructura, el UI y las diversas pantallas en las que es aplicado.

| Token              | Valor                                              | Descripción                   |
| ------------------ | -------------------------------------------------- | ----------------------------- |
| --f-golden-ratio   | 1.618033989                                        | Valor base para calcular la escala de espacios en Flare. Se origina en la fórmula matemática que obtiene la proporción áurea entre dos segmentos.
| --f-gutter:        | 16px                                               | Valor que determina el segmento inicial desde el que es calculado la escala de espacios en Flare.
| --f-gutter-l       | calc(var(--f-gutter) * var(--f-golden-ratio))      | Incremento de espacio con relación al segmento ```--f-gutter```. Resultado obtenido del cálculo ```(--f-gutter)(--f-golden-ratio)```.
| --f-gutter-xl      | calc(var(--f-gutter-l) * var(--f-golden-ratio))    | Incremento de espacio con relación al segmento ```--f-gutter-l```. Resultado obtenido del cálculo ```(--f-gutter-l)(--f-golden-ratio)```.
| --f-gutter-xxl     | calc(var(--f-gutter-xl) * var(--f-golden-ratio))   | Incremento de espacio con relación al segmento ```--f-gutter-xl```. Resultado obtenido del cálculo ```(--f-gutter-xl)(--f-golden-ratio)```.
| --f-gutter-xxxl    | calc(var(--f-gutter-xxl) * var(--f-golden-ratio))  | Incremento de espacio con relación al segmento ```--f-gutter-xxl```. Resultado obtenido del cálculo ```(--f-gutter-xxl)(--f-golden-ratio)```.
| --f-gutter-s       | calc(var(--f-gutter) / var(--f-golden-ratio))      | Decremento de espacio con relación al segmento ```--f-gutter```. Resultado obtenido del cálculo ```(--f-gutter)/(--f-golden-ratio)```.
| --f-gutter-xs      | calc(var(--f-gutter-s) / var(--f-golden-ratio))    | Decremento de espacio con relación al segmento ```--f-gutter-s```. Resultado obtenido del cálculo ```(--f-gutter-s)/(--f-golden-ratio)```.
| --f-gutter-xxs     | calc(var(--f-gutter-xs) / var(--f-golden-ratio))   | Decremento de espacio con relación al segmento ```--f-gutter-xs```. Resultado obtenido del cálculo ```(--f-gutter-xs)/(--f-golden-ratio)```.
| --f-radius         | var(--f-gutter)                                    | Valor incial desde el que es calculado la escala del radio o curvatura de los bordes de una caja en Flare.
| --f-radius-l       | calc(var(--f-radius) * var(--f-golden-ratio))      | Incremento del radio del borde de una caja con relación al valor ```--f-radius```. Resultado obtenido del cálculo ```(--f-radius)(--f-golden-ratio)```.
| --f-radius-xl      | calc(var(--f-radius-l) * var(--f-golden-ratio))    | Incremento del radio del borde de una caja con relación al valor ```--f-radius-l```. Resultado obtenido del cálculo ```(--f-radius-l)(--f-golden-ratio)```.
| --f-radius-xxl     | calc(var(--f-radius-xl) * var(--f-golden-ratio))   | Incremento del radio del borde de una caja con relación al valor ```--f-radius-xl```. Resultado obtenido del cálculo ```(--f-radius-xl)(--f-golden-ratio)```.
| --f-radius-xxxl    | calc(var(--f-radius-xxl) * var(--f-golden-ratio))  | Incremento del radio del borde de una caja con relación al valor ```--f-radius-xxl```. Resultado obtenido del cálculo ```(--f-radius-xxl)(--f-golden-ratio)```.
| --f-radius-s       | calc(var(--f-radius) / var(--f-golden-ratio))      | Decremento del radio del borde de una caja con relación al valor ```--f-radius```. Resultado obtenido del cálculo ```(--f-radius)/(--f-golden-ratio)```.
| --f-radius-xs      | calc(var(--f-radius-s) / var(--f-golden-ratio))    | Decremento del radio del borde de una caja con relación al valor ```--f-radius-s```. Resultado obtenido del cálculo ```(--f-radius-s)/(--f-golden-ratio)```.
| --f-radius-xxs     | calc(var(--f-radius-xs) / var(--f-golden-ratio))   | Decremento del radio del borde de una caja con relación al valor ```--f-radius-xs```. Resultado obtenido del cálculo ```(--f-radius-xs)/(--f-golden-ratio)```.