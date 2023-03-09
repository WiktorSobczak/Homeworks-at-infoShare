UWAGA!
Nie dodajemy filtrowania ani wyszukiwania, lista powinna zostać pobrana w całości i tak zostać. W sekcji detaili wyświetlamy tylko te dane, które udało się pobrać, nie wszystkie jakie są pokazane na pliku z designem. Aplikacja musi być czytelna, poprawna semantycznie i względnie estetyczna - nie musi być 1 do 1 odwzorowaniem grafiki.

Praca z GITem powinna przebiegać w standardowy już sposób - tworzymy w swoim lokalnym repozytorium folder o takiej samej nazwie jak folder tego zdania - '09-react-advanced'. Tworzymy lokalnie gałąź z gałęzi main i nazywamy ją tak samo jak folder - '08-react-advanced', następnie commitujemy zmiany (ilość commitów dowolna, ale w języku angielskim) następnie robimy push i wystawiamy Pull Request do gałęzi głównej, info do mnie i code review. PAMIĘTAJCIE ABY NOWEGO BRANCZA DO ZADANIA STWORZYĆ BEZPOŚREDNIO Z LOKALNEJ GAŁĘZI MAIN ZSYNCHRONIZOWANEJ ZE ZDALNYM REPOZYTORIUM

Co powinna zawierać aplikacja, jak powinna się zachowywać?

1. Do prawidłowego działania aplikacji potrzebne będzie zainstalowanie react-router-dom i przygotowanie się na stworzenie dwóch routingów - dla strony głównej oraz dla strony z detalami dla konkretnego państwa. Routing główny zostawiam do dowolnego nazwania, ale routing dla konkretnego kraju będzie musiał zawierać nazwę tego kraju, aby możliwe było łatwe wyświetlanie danych danego kraju (przykładowy routing dla kraju '.../poland').

2. Po odplaneniu aplikacji pobierana jest lista państw. Tutaj jest możliwość zdobycia bonusowego punktu za 'loader' podczas pobierania danych - może to być zwykły tekst 'Loading...', może to być kręciołek, zostawiam do wyboru. Lista powinna być wyświetlona w sposób czytelny, ale nie ma konieczności odwzorowania designu 1 do 1. Każdy blok z krajem powinien być Linkiem (komponent Link z react-router-dom), tak, aby po kliknięciu przeniosło nas pod nowy adres z nazwą danego kraju (czyli tak jak wyżej - np '/poland').

Do pobrania całej listy wykorzystać:
https://restcountries.com/v2/all?fields=name,capital,flag,population,regions

3. Przejście pod adres z detalami danego kraju powinien wywołać pobieranie danych danego kraju i wyświetlić je. Jeśli dodałeś 'loader' w punkcie 2 tutaj też go uwzględnij. Po pobraniu danych powinny być one wyświetlone również w sposób czytelny, ale nie musi to być 1 do 1 tak jak w pliku z designem. Wyświetlamy tylko te dane, które są zwracane z podanego niżej adresu - jeśli na grafice jest ich więcej - pomijamy je. Tutaj możliwość zdobycia drugiego bonusowego punktu za dodanie przycisku 'Back' który będzie cofać do widoku listy.

Do pobrania danych wykorzystać:
https://restcountries.com/v2/name/peru?fields=name,capital,region,subregion,borders,flag&fullText=true (przykład dla Peru)
w kodzie 'Peru' powinno być zastąpione wartością odczytywaną z adresu URL (za pomocą 'react-router-dom' i hook'a useParams)

czyli generyczny link będzie wyglądał tak:
`https://restcountries.com/v2/name/${country}?fields=name,capital,region,subregion,borders,flag&fullText=true`
gdzie country to właśnie nazwa kraju

4. Aplikacja powinna być wyposażona w możliwość zmiany trybu z ciemnego na jasny - do tego wykorzystaj Reactowy Context. Ikona zmiany trybu znajduje się w nagłówku. Zmianie powinny podlegać: tło oraz kolor fontów.

5. Stylowanie dowolne - albo css modules, albo styled componenets

Wskazówki:

1. W przypadku gdy piszemy aplikację z kilkoma stronami (lista i detale jako 2 osobne routy w aplikacji) warto stworzyć w folderze 'src' folder 'Pages' i w nim po folderze dla każdej strony (np 'List' i 'Details') i w tych folderach dodawać komponenty i logikę związane z danym modułem.
2. Do pobierania danych (zarówno lista jak i detale) wykorzystać useEffect wraz z wbudowaną w JS funkcją 'fetch' (można też skorzystać np z bilbioteki axios - dla chętnych, ale nie ma konieczności).
3. Pobrana lista państw powinna być zapisana w stanie (useState) i wyświetlona za pomocą funkcji 'map'. Ustawianie stanu powinno następować w useEffect po poprawnym pobraniu danych.
4. Aby pobrać detale należy wykorzystać hook useParams (https://v5.reactrouter.com/web/api/Hooks/useparams) za pomocą którego 'wyciągniemy' z adresu URL nazwę kraju i wciśniemy ją do linku służącego do pobierania kraju. Aby było to możliwe konieczne jest poprawne przygotowanie routingu z dynamiczną wartością - zerknij na link z dokumentacją dla useParams (https://v5.reactrouter.com/web/api/Hooks/useparams) - tutaj jest pokazane w jakis sposób tworzyć taki dynamiczny routing (za pomocą '/:country' w naszym przypadku)
5. Pobierany detale równiez za pomocą useEffect i funkcji 'fetch', następnie zapisujemy w stanie te dane i wyświetlamy je

Punktacja:

1. Pobieranie listy, wyświetlanie jej i ogólna poprawność tej sekcji (zarówno stylowanie jak i pobrane znaczniki HTML i czystość całego kodu) - 4 punkty
2. Pobieranie detali, wyświetlanie ich i ogólna poprawność tej sekcji (zarówno stylowanie jak i pobrane znaczniki HTML i czystość całego kodu) - 4 punkty
3. Dodanie contextu i sterowanie wyglądem w zależności od trybu - 4 punkty
4. BONUS - dodanie loadera w sekcji listy i sekcji detali (jak już dodajemy, to w obu) - 1 punkt
5. BONUS - dodanie przycisku 'Back' w sekcji detali - 1 punkt

Czas oddania:

11.12.2022 (do północy)
