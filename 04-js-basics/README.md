Praca z GITem powinna przebiegać w standardowy już sposób - tworzymy w swoim lokalnym repozytorium folder o takiej samej nazwie jak folder tego zdania - '04-js-basics'. Tworzymy lokalnie gałąź z gałęzi main i nazywamy ją tak samo jak folder - '04-js-basics', następnie commitujemy zmiany (ilość commitów dowolna, ale w języku angielskim) następnie robimy push i wystawiamy Pull Request do gałęzi głównej, info do mnie i code review :)

Termin oddania: 22.09.2022 do końca dnia (do północy).

---

## Zadania

---

#### Zadanie 1 - 1 punkt

Stwórz funkcję 'add', która przyjmuje 2 parametry - 'a' i 'b' oraz zwraca ich sumę. Funkcja powinna sprawdzić, czy oba parametry są typu 'number' (podpowiedź: operator typeof)

---

#### Zadanie 2 - 3 punkty

Stwórz 2 obiekty reprezentujące osobę. Niech każdy zawiera imię, nazwisko i listę hobby (tablica stringów). Dodaj te osoby do nowej tablicy za pomocą metody push.
Napisz 2 funkcje, gdzie każda przyjmuje jako parametr obiekt i wyświetla jego dane. Skorzystaj w jednej z interpolacji i w drugiej z konkatenacji. Przykładowe zdanie: 'Mam na imię A B, moje hobby to C, D, E. Do wyświetlenia listy hobby skorzystaj z funkcji join. Za pomocą metody forEach wywołaj te funkcje dla wszystkich elementów w tablicy. Funkcja forEach powinna zostać wywołana 2 razy - raz korzystając z funkcji bazującej na interpolacji a drugi raz funkcji bazującej na konkatenacji.

---

#### Zadanie 3 - 3 punkty

Utwórz 3 osoby (obiekty) - niech każdy posiada numer pesel, adress jako obiekt (z ulicą, miastem i kodem pocztowym) i wiek. Stwórz funkcję, która jako parametr przyjmie obiekt osoby i jeśli jej wiek jest większy niż 30 lat to zwróci 'true' (przeciwnie - 'false').
Stwórz nową tablicę osób starszych niż 30 lat za pomocą metody filter, gdzie jako parametr przekażesz stworzoną wcześniej funkcję. Wykonaj console.table() tej nowo powstałej tablicy - dorzuć screen do folderu z zadaniem.

---

#### Zadanie 4 - 1 punkt

Do zadania wykorzystaj obiekty osób z zadania 3. Dodaj je do nowej tablicy - metoda dodania jest dowolna. Napisz funkcję, która jako parametr przyjmie tę tablicę i zwróci sumę wieku wszystkich osób. Wykorzystaj funkcję reduce do zsumowania wieku.

---

#### Zadanie 5 - 3 punkty

Stwórz funkcję (A), która będzie przyjmowała jeden parametr (x) - liczbę całkowitą. Zadaniem tej funkcji będzie zwrócenie innej funkcji (B), która również przyjmuje jeden parametr (y)- również liczbę całkowtią. Zwracana funkcja (B) powinna zwrócić sumę paramatrów przekazanych do obu z tych funkcji (x + y).

funkcja A(x) zwraca funkcję B(y), która zwraca (x + y)

Podane wyżej oznacznia - A, B, x, y są tylko do zobrazowania - do wykonania zadania wykorzystaj bardziej opisowe nazwy.

Obie funkcje powinny ummożliwić sumowanie parametrów zdefiniowanych przez użytkownika w momencie ich wywoływania, np:

const addTwo = adder(2);

gdzie 'adder' to nasza funkcja 'A' a 2 to parametr 'x'. Rezultat, czyli 'addTwo' to zwracana funkcja 'B'

const result = addTwo(7);

Result to 9, gdzie addTwo to nasza funkcja 'B' a 7 to nasz paramatr 'y'

---

#### Uwagi

1. Kod piszemy camelCasem i tylko po angielsku

---
