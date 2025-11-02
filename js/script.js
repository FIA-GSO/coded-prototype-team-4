const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('nav-list');

menuIcon.addEventListener('click', () => {
    if (menuIcon.innerHTML === '☰') {
        menuIcon.innerHTML = '✖';
    } else {
        menuIcon.innerHTML = '☰';
    }
    navList.classList.toggle('show');
});

const activitiesContainer = document.getElementById('activities-container');
const addButtonActivity = document.getElementById('add-button-activity');

const trashIcon = activitiesContainer.querySelector('.trash-bin');

trashIcon.addEventListener('click', () => {
    const activity = trashIcon.closest('.activity');
    const activityNumber = trashIcon.closest('.activity').dataset.activity;
    activity.remove();
});

addButtonActivity.addEventListener('click', () => {
    const activityCount = document.querySelectorAll('.activity').length + 1;
    const newActivity = document.createElement('div');
    newActivity.classList.add('activity');
    newActivity.dataset.activity = activityCount;

    newActivity.innerHTML = `
        <div class="row">
            <div class="col">
                <h4>Tätigkeit ${activityCount}</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-1">
                <label for="activity-day">Tag</label><br />
                <select name="activity-select-day" id="activity-day">
                    <option value="Montag">Montag</option>
                    <option value="Dienstag">Dienstag</option>
                    <option value="Mittwoch">Mittwoch</option>
                    <option value="Donnerstag">Donnerstag</option>
                    <option value="Freitag">Freitag</option>
                </select>
            </div>
            <div class="col-2">
                <label for="activity-duration">Dauer</label><br />
                <select name="activity-select-duration" id="activity-duration">
                    <option value="1">1.0h</option>
                    <option value="2">2.0h</option>
                    <option value="3">3.0h</option>
                    <option value="4">4.0h</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <textarea id="activity-description" name="activity-description" rows="5" cols="30" placeholder="Tätigkeit"></textarea>
            </div>
            <div class="col-3">
                <img src="images/trash-bin.png" class="trash-bin" alt="Tätigkeit entfernen" width="25" height="25" />
            </div>
        </div>
    </div>
    `;

    activitiesContainer.appendChild(newActivity);

    const trashIcons = activitiesContainer.querySelectorAll('.trash-bin');

    trashIcons.forEach(trashIcon => {
        trashIcon.addEventListener('click', () => {
            const activity = trashIcon.closest('.activity');
            const activityNumber = trashIcon.closest('.activity').dataset.activity;
            activity.remove();
            updateActivityNumbers();
        });
    });
});

function updateActivityNumbers() {
    document.querySelectorAll('.activity').forEach((activity, index) => {
        const activityNumber = index + 1;
        activity.dataset.activity = activityNumber;
        const activityHeading = activity.querySelector('h4');
        activityHeading.innerHTML = 'Tätigkeit ' + activityNumber;
    });
}

