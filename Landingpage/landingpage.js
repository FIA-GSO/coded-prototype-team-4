document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Elemente auswählen (aktualisierte IDs und Klassen) ---
    const newEntryBtn = document.getElementById('btn-neu');
    const downloadBtn = document.getElementById('btn-download');
    const filterFabBtn = document.querySelector('.filter-fab'); // Neuer Filter-Button

    // --- 2. Event Listeners für Haupt-Buttons ---
    newEntryBtn.addEventListener('click', createNewEntry);
    downloadBtn.addEventListener('click', downloadEntries);
    filterFabBtn.addEventListener('click', applyFilter); // Listener für den Filter-Button

    // --- 3. Funktionen für Haupt-Buttons ---

    function createNewEntry() {
        window.location.href = "../neuer-ausbildungsnachweis.html";
        return;
    }

    function downloadEntries() {
        alert('Die "Herunterladen"-Funktion ist noch nicht implementiert.');
        console.log('Hier könnte die Logik zum Erstellen einer PDF oder CSV stehen.');
    }

    function applyFilter() {
        alert('Die "Filter"-Funktion ist noch nicht implementiert.');
        console.log('Hier könnte eine Logik für das Filtern der Einträge stehen.');
    }


    // Finde ALLE existierenden Einträge auf der Seite (aktualisierte Klasse)
    const allEntries = document.querySelectorAll('.entry-card');


    // Dropdown-Menü für jede Karte aktivieren
    document.querySelectorAll('.dropbtn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // verhindert, dass das Klick-Event sich weiter verbreitet
            const dropdown = btn.parentElement;
            dropdown.classList.toggle('show');
        });
    });

    // Wenn man irgendwo anders klickt, Dropdown schließen
    window.addEventListener('click', () => {
        document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('show'));
    });

});