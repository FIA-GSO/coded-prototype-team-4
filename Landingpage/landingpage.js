document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Elemente auswählen (aktualisierte IDs und Klassen) ---
    const newEntryBtn = document.getElementById('btn-neu');
    const downloadBtn = document.getElementById('btn-download');
    const entriesContainer = document.getElementById('entries-list'); // Hier geänderte ID
    const filterFabBtn = document.querySelector('.filter-fab'); // Neuer Filter-Button

    // --- 2. Event Listeners für Haupt-Buttons ---
    newEntryBtn.addEventListener('click', createNewEntry);
    downloadBtn.addEventListener('click', downloadEntries);
    filterFabBtn.addEventListener('click', applyFilter); // Listener für den Filter-Button

    // --- 3. Funktionen für Haupt-Buttons ---

    function createNewEntry() {
        const zeitraum = prompt("Gib den Zeitraum ein (z.B. 01.10. - 07.10.2025):");
        const abschnitt = prompt("Gib den Ausbildungsabschnitt ein:");
        const betreuer = prompt("Gib den Betreuer ein:");

        if (!zeitraum || !abschnitt || !betreuer) {
            alert("Erstellung des Eintrags abgebrochen.");
            return;
        }

        const entryElement = document.createElement('div');
        entryElement.className = 'entry-card'; // Geänderte CSS-Klasse für die Karte

        entryElement.innerHTML = `
            <h3>Zeitraum: ${zeitraum}</h3>
            <p>Ausbildungsabschnitt: ${abschnitt}</p>
            <p>Betreuer: ${betreuer}</p>
            <p>Status: In Bearbeitung</p>
            <div class="card-actions">
                <button class="action-btn edit">Bearbeiten</button>
                <button class="action-btn delete">Löschen</button>
            </div>
        `;

        entriesContainer.prepend(entryElement);
        addListenersToEntry(entryElement); // Listener für die neuen Buttons hinzufügen
    }

    function downloadEntries() {
        alert('Die "Herunterladen"-Funktion ist noch nicht implementiert.');
        console.log('Hier könnte die Logik zum Erstellen einer PDF oder CSV stehen.');
    }

    function applyFilter() {
        alert('Die "Filter"-Funktion ist noch nicht implementiert.');
        console.log('Hier könnte eine Logik für das Filtern der Einträge stehen.');
    }

    // --- 4. Event Listeners für Aktions-Buttons (Bearbeiten/Löschen) ---

    function addListenersToEntry(entry) {
        const editBtn = entry.querySelector('.action-btn.edit');
        const deleteBtn = entry.querySelector('.action-btn.delete');

        editBtn.addEventListener('click', () => {
            alert('Die "Bearbeiten"-Funktion ist noch nicht implementiert.');
        });

        deleteBtn.addEventListener('click', () => {
            if (confirm("Diesen Eintrag wirklich endgültig löschen?")) {
                entry.remove();
            }
        });
    }

    // Finde ALLE existierenden Einträge auf der Seite (aktualisierte Klasse)
    const allEntries = document.querySelectorAll('.entry-card');
    
    // ...und füge JEDEM von ihnen die "Bearbeiten"- und "Löschen"-Logik hinzu
    allEntries.forEach(entry => {
        addListenersToEntry(entry);
    });

});