# Review

## Ogólne

1. Skonfigurowany Prettier - brawo!
2. Trzymamy się angielskich nazw plików (i w ogóle angielskiego wszędzie w kodzie). Przyjęło się, że strona to po prostu 'index.html' (jeśli jest tylko jedna w projekcie).
3. Dodałeś JS do kodu i ten JS działa - mega!

## CSS

1. Unikaj selektorów po tagach (selektory to powinny być w zasadzie tylko klasy) - np. selektor 'h2' złapie wszystko na stronie - w przypadku tego zadania nie ma to znaczenia, ale gdyby pojawiło się więcej takich h2 to mielibyśmy proawdopodobnie problem :D Lepiej sprawdzi się po prostu 'section-header' jeśli będą to style uniwersalne jako header dla każdej sekcji lub 'about-header' jeśli byłby to header dla sekcji 'about' - i analogicznie pozostałe style, które łapałeś po selektorze HTML :)
2. W selektorach używamy klas zamiast ID: https://dev.to/clairecodes/reasons-not-to-use-ids-in-css-4ni4. Oczywiście nie jest to błąd, ale dobre praktyki wskazują, żeby stosować klasy w selektorach.
3. Style dodajemy w pliku CSS - unikamy tzw 'inline styles' - czyli dodawania styli jako atrybutów w HTML (u Ciebie jest to np. 'color').
4. Dobrą praktyką jest używanie jednego stylu kolorów - jeśli korzystasz z hex, to nazwy kolorów typu 'white' też fajnie jest zapisać przy pomocy tej notacji.
5. Nie ma potrzeby definiowania ponownie 'font-family' jeśli zrobiłeś to raz dla znacznika 'body'.
6. Selektor 'a :nth-of-type(odd)' jest ciut niebezpieczny - każdy niepatrzysty znacznik 'a' miałby te style - mogłoby to zepsuć stylowanie w innych miejscach na stronie - lepsze byłoby dodanie klasy do wszystkich znaczników 'a' w menu i wtedy dodanie im stylowania - np. 'menu-link'.
7. Nazwa klasy 'nav-menu' wskazuje jakby element z tą klasą był 'menu' a tak naprawdę to 'menu-item' - pojedynczy element menu. Pamiętaj, żeby w klasach jasno wskazywać to, czego te klasy dotyczą - nie bój się jeśli nazwa klasy będzie przez to dłuższa - to nie problem :) Tak samo np klasa 'git' niewiele mówi, ale już 'git-logo' tak :)
8. Używanie 'cm' na stronie to niezbyt dobry pomysł - utrzymanie stylowania w pixelach i w centymetrach jednocześnie mogłoby być problematyczne - tym bardziej, że centymetr (czy nawet milimetr) nie jest w żaden sposób kalkulowany na pixele.
9. Super, że zastosowałeś flexbox!

## HTML

1. Brawo za użycie taga 'haeder' - nie wspomniałem o nim w zadaniu ale sam go dodałeś - super!
2. Znacznik body powinien zawierać w sobie całość - header powinien być w nim zawarty.
3. Link do githuba powinien otwierać się jako nowa karta (about -> blank).
4. ID służące do nawigacji powinny znajdować się w tagach 'section' a nie nagłówkach - bo klikająć na link przenosimy się do sekcji - ma to w zasadzie znaczenie semantyczne.
5. ID w znacznikach 'a' w nawigacji są zbędne - wykorzystujesz to do stylowania, ale lepiej, żeby to była klasa :)
6. Super, że stworzyłeś osobny folder na obrazki.
7. Formularz powinien być jeden - jeden znacznik 'form' a w środku pola tego formularza.
8. Znaczniki 'img' powinny mieć dodany atrybut 'alt'.
9. Znacznik 'label' powinien zawierać w sobie atrybut 'for' z nazwą id pola, na który wskazuje: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label.
10. Język polski na stronie w przypadku treści jest ok, ale wszelkie atrybuty / klasy / ogólnie kod powinien być po polsku (u Ciebie jest atrybut name z wartością 'imię' - powinno być po prostu name="name").
11. Wecont - niewiele to mówi :D
12. Zabrakło 'label' dla pola 'textarea'.

## Git

1. Praca z GIT super, wszystko poprawnie! Jestem pod wrażeniem jak fajnie pracowałeś z commitami - super to wygląda.

## Podsumowanie

SUPER! Parę małych uwag - koniecznie zapamiętaj, że body zawiera wszystko co się znajduje na stronie (znacznik 'head' zawiera metadane, znacznik 'body' - to, co widać na stronie). W selektorach CSS używaj klas, staraj się nie bazować bezpośrednio na tagu HTM i na IDL. Poza tym to bez większych zastrzeżeń - kod czytelny, brak zbędnych znaczników i zbędnych CSSów - oby tak dalej! Za zadanko dostajesz 10 punktów (9/10 za podstawowy zakres zadania + 1 bonus :)).
