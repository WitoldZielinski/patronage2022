# patronage2022
Project created for the need of Intive patronage 2022 internship.
The interface language is Polish as well as the description of the project requirements listed below.


Twoje zadanie to przygotowanie aplikacji, która pozwala na rejestrację i logowanie użytkownika
a zalogowanemu użytkownikowi wyświetla galerię zdjęć. Aplikacja powinna składać się z 4
ekranów:
1. Widok niezalogowanego użytkownika: na górze po lewej stronie ekranu umieść
przyciski „Logowanie” i „Rejestracja”. Na środku strony możesz umieścić jakąś treść
jako zachętę lub ozdobę
2. Rejestracja: formularz rejestracji nowego użytkownika
3. Logowanie: formularz logowania użytkownika
4. Widok zalogowanego użytkownika: na górze strony po prawej stronie ekranu umieść
nazwę użytkownika i przycisk „Wyloguj”. Na środku ekranu umieść galerię.
Do stworzenia aplikacji użyj czystego Javascript, HTML i CSS. Zewnętrzne biblioteki i
frameworki nie są dozwolone – nie używaj więc jQuery, Reacta, Boostrapa SCSS, lodash itp.

Wymagania:

• Ogólne
o Formularz rejestracji składający się z pól „Nazwa użytkownika”, „Hasło, „Email”,
„Potwierdź email” i przycisku „Zarejestruj”
o Formularz logowania składający się z pół „Nazwa użytkownika” i „Hasło” oraz
przycisku „Zaloguj”
o Górny pasek akcji („Logowanie”, „Rejestracja”, „Wyloguj”) powinien odróżniać
się od reszty strony np. kolorem tła
o Formularze powinny być wyśrodkowane w pionie i poziomie a pola formularza
być w układzie kolumny z labelami po lewej stronie
o W górnym pasku akcji oraz w formularzach do pozycjonowania elementów użyj

flexboxa ( https://developer.mozilla.org/en-
US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox )

o Zadbaj o estetyczny i spójny wygląd całości jak i poszczególnych elementów.
Nie masz tutaj sztywnych ram ani konkretnych wymagań, ale też postaraj się
nie przesadzić, jednocześnie demonstrując swoją wiedzę o CSS
o Błędy walidacji pokazuj w kontekście pola, które zawiera błąd
o Cała aplikacja używa czcionki Open Sans, osadzonej przez <link />
o Nie powinno być żadnych dodatkowych wymagań dotyczących „uruchomienia”
aplikacji, poza otwarciem pliku index.html w przeglądarce

• Rejestracja
o Po rejestracji, nowy użytkownik jest od razu zalogowany a zarejestrowani
użytkownicy są przechowywani w przeglądarce tak, żeby można było
zalogować się na wszystkie zarejestrowane konta, również po odświeżeniu
strony
o Nazwa użytkownika musi być unikalna a na jeden adres email nie można
założyć więcej niż jednego konta


o Walidacja:
▪ pole „Email” musi mieć poprawny format adresu email,
▪ pole „Potwierdź email” musi mieć taką samą wartość jak „Email”,
▪ pole „Nazwa użytkownika” musi mieć między 6 a 20 znaków,
dozwolone znaki to litery i cyfry,
▪ pole „Hasło” musi mieć co najmniej 6 znaków
▪ walidacja pól następuje po wciśnięciu przycisku „Zarejestruj”
▪ do walidacji możesz użyć własności HTML -
  https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation

o W tym widoku widoczny u góry jest tylko przycisk „Logowanie”


• Logowanie
o Sprawdź, czy użytkownik istnieje i czy hasło jest poprawne - jeśli nie, wyświetl
stosowny błąd
o Jeśli użytkownik jest zalogowany, to po odświeżeniu strony nadal pozostaje
zalogowany
o W tym widoku widoczny u góry jest tylko przycisk „Rejestracja”


• Widok zalogowanego użytkownika
o Zalogowany użytkownik widzi galerię obrazów w układzie siatki – użyj grid (
https://developer.mozilla.org/pl/docs/Web/CSS/CSS_Grid_Layout )
o W tym widoku przyciski „Logowanie” i „Rejestracja” są niewidoczne
o Na urządzeniu mobilnym (ekran poniżej 768px szerokości) siatka składa się z
jednej kolumny, na urządzeniach większych z trzech kolumn
o Galeria powinna się przewijać jeśli nie mieści się na ekranie w pionie, ale górny
pasek akcji musi pozostać widoczny
o Galeria nie może być szersza niż ekran (niedopuszczalne jest przewijanie w
poziomie, ani strony ani samej galerii).
o Do pobrania listy obrazów użyj jednego z darmowych, publicznie dostępnych
API. Dane w formacie JSON pobierz przy pomocy fetch. Przykładowe API
znajdziesz poniżej
o Wybrane API musi, poza samym obrazem, zwracać dodatkowe metadane (np.
tytuł, opis, autor, ocena)
o Siatka galerii składa się z kart, na których umieszczony jest obraz oraz, pod
nim, wybrane przez Ciebie metadane, np. tytuł lub autor zdjęcia
o Dostosuj rozmiar kart w siatce tak, aby galeria dobrze wypełniała dostępne
miejsce


Wymagania dodatkowe:
Czyli bonusowe punkty za bonusowe funkcjonalności. Możesz wypełnić wszystkie, możesz
tylko niektóre, możesz nie robić żadnego.
• Strona musi być responsywna1
• Strona musi być dostępna przynajmniej w podstawowym zakresie, dotyczy formularzy oraz galerii
• Hasło użytkownika musi być przechowywane niejawnie – czyli nie plain textem,
ale np. jako hash – ale sama metoda hashowania nie musi być bardzo ukryta
• Walidacja nazwy użytkownika: długość od 6 do 20 znaków, wartość może
składać się tylko z liter, cyfr oraz znaków - _ [ ] \ / przy czym musi zawierać co
najmniej 4 litery
• Walidacja email musi uwzględniać popularne aliasy adresów, np.
adres@gmail.com to to samo co adres+alias@gmail.com
• Walidacja realizowana z użyciem wyrażeń regularnych (tam, gdzie to ma sens)
po stronie JS
• W galerii metadane obrazów widoczne są tylko po kliknięciu obrazu lub
wybraniu go przy pomocy klawiatury (tab)

Zasoby:
Otwarte API z obrazami:
• https://imgflip.com/api
• https://www.pexels.com/api/
• lista innych API https://the-api-collective.com/category/photography
Praktyczne wprowadzenie do CSS flexbox: https://flexboxfroggy.com/#pl
Praktyczne wprowadzenie do CSS grid: https://cssgridgarden.com/#pl
Przechowywanie danych – Storage API
https://developer.mozilla.org/pl/docs/Web/API/Web_Storage_API
Wyrażenia regularne: https://regexr.com/

Na co będziemy zwracać uwagę:
• Czytelność i porządek w kodzie
• Dokładne spełnienie wymagań podstawowych
• Użycie najnowszych technologii: semantyczny HTML, ES6+, CSS3+

1 https://web.dev/responsive-web-design-basics/
2 https://webaim.org/techniques/forms/


Zadanie powinno być wykonane do 30 listopada przed północą. Jeżeli masz jakiekolwiek

pytania lub wątpliwości co do wymagań, zapraszamy do kontaktu mailowego - patronage-
poznan-javascript@intive.com

Swoje rozwiązanie dostarcz w postaci pliku .zip o nazwie imie_nazwisko_patronage.zip na nasz
adres email, wskazany powyżej.
Powodzenia!
