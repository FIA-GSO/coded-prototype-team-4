const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('nav-list');
const trainingCertificateForm = document.getElementById('training-certificate-form');
const periodFromInput = document.getElementById('period-from');
const periodFromHint = document.getElementById('period-from-hint');
const periodToInput = document.getElementById('period-to');
const periodToHint = document.getElementById('period-to-hint');
const departmentInput = document.getElementById('department');
const departmentHint = document.getElementById('department-hint');
const emailOfSupervisorInput = document.getElementById('email-of-supervisor');
const emailOfSupervisorHint = document.getElementById('e-mail-of-supervisor-hint');
const repeatEmailOfSupervisorInput = document.getElementById('repeat-email-of-supervisor');
const repeatEmailOfSupervisorHint = document.getElementById('repeat-email-of-supervisor-hint');
const activitiesContainer = document.getElementById('activities-container');
const addButtonActivity = document.getElementById('add-button-activity');
const trashIcon = activitiesContainer.querySelector('.trash-bin');
const submitButton = document.getElementById('submit-button');

menuIcon.addEventListener('click', () => {
    if (menuIcon.innerHTML === '☰') {
        menuIcon.innerHTML = '✖';
    } else {
        menuIcon.innerHTML = '☰';
    }
    navList.classList.toggle('show');
});

periodFromInput.addEventListener('blur', () => {
    if(periodFromInput.value === '') {
        periodFromInput.style.borderColor = 'red';
        periodFromInput.style.backgroundColor = '#ffebee';
    } else {
        periodFromInput.style.borderColor = 'green';
        periodFromInput.style.backgroundColor = '#e8f5e9';
    }
});

periodToInput.addEventListener('blur', () => {
    if(periodToInput.value === '') {
        periodToInput.style.borderColor = 'red';
        periodToInput.style.backgroundColor = '#ffebee';
    } else {
        periodToInput.style.borderColor = 'green';
        periodToInput.style.backgroundColor = '#e8f5e9';
    }
});

departmentInput.addEventListener('blur', () => {
    if(departmentInput.value === '') {
        departmentInput.style.borderColor = 'red';
        departmentInput.style.backgroundColor = '#ffebee';
    } else {
        departmentInput.style.borderColor = 'green';
        departmentInput.style.backgroundColor = '#e8f5e9';
    }
});

function validateEmails() {
    sanitizedEmailOfSupervisor = emailOfSupervisorInput.value.trim();
    sanitizedRepeatEmailOfSupervisor = repeatEmailOfSupervisorInput.value.trim();

    if(sanitizedEmailOfSupervisor === '' || sanitizedRepeatEmailOfSupervisor === '') {
        emailOfSupervisorInput.style.borderColor = 'red';
        emailOfSupervisorInput.style.backgroundColor = '#ffebee';
        repeatEmailOfSupervisorInput.style.borderColor = 'red';
        repeatEmailOfSupervisorInput.style.backgroundColor = '#ffebee';
        return;
    }

    if (sanitizedEmailOfSupervisor === sanitizedRepeatEmailOfSupervisor) {
        emailOfSupervisorInput.style.borderColor = 'green';
        emailOfSupervisorInput.style.backgroundColor = '#e8f5e9';
        repeatEmailOfSupervisorInput.style.borderColor = 'green';
        repeatEmailOfSupervisorInput.style.backgroundColor = '#e8f5e9';
    } else {
        emailOfSupervisorInput.style.borderColor = 'red';
        emailOfSupervisorInput.style.backgroundColor = '#ffebee';
        repeatEmailOfSupervisorInput.style.borderColor = 'red';
        repeatEmailOfSupervisorInput.style.backgroundColor = '#ffebee';
    }
}

emailOfSupervisorInput.addEventListener('blur', validateEmails);
repeatEmailOfSupervisorInput.addEventListener('blur', validateEmails);

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

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    if(periodFromInput.value === '') {
        periodFromHint.textContent = 'Bitte geben Sie Zeitraum von an';
    }
    if(periodToInput.value === '') {
        periodToHint.textContent = 'Bitte geben Sie Zeitraum bis an';
    }
    if(departmentInput.value === '') {
        departmentHint.textContent = 'Bitte geben Sie Ausbildungsabteilung an';
    }
    if(emailOfSupervisorInput.value === '') {
        emailOfSupervisorHint.textContent = 'Bitte geben Sie eine E-Mail an';
    }
    if(repeatEmailOfSupervisorInput.value === '') {
        repeatEmailOfSupervisorHint.textContent = 'Bitte geben Sie eine E-Mail an';
    }
});

periodFromInput.addEventListener('input', () => {
    if(periodFromHint.textContent !== '') {
        periodFromHint.textContent = '';
    }
});

periodToInput.addEventListener('input', () => {
    if(periodToHint.textContent !== '') {
        periodToHint.textContent = '';
    }
});

departmentInput.addEventListener('input', () => {
    if(departmentHint.textContent !== '') {
        departmentHint.textContent = '';
    }
});

emailOfSupervisorInput.addEventListener('input', () => {
    if(emailOfSupervisorHint.textContent !== '') {
        emailOfSupervisorHint.textContent = '';
    }
});

repeatEmailOfSupervisorInput.addEventListener('input', () => {
    if(repeatEmailOfSupervisorHint.textContent !== '') {
        repeatEmailOfSupervisorHint.textContent = '';
    }
});
