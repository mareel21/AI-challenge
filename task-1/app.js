// Application logic
document.addEventListener('DOMContentLoaded', () => {
    const leaderboardEl = document.getElementById('leaderboard');
    const departmentFilter = document.getElementById('department-filter');
    const periodFilter = document.getElementById('period-filter');
    const sortBy = document.getElementById('sort-by');

    // Populate department filter
    departments.forEach(dept => {
        const option = document.createElement('option');
        option.value = dept;
        option.textContent = dept;
        departmentFilter.appendChild(option);
    });

    function renderLeaderboard(data) {
        leaderboardEl.innerHTML = '';
        data.forEach((person, index) => {
            const card = createCard(person, index + 1);
            leaderboardEl.appendChild(card);
        });
    }

    function createCard(person, rank) {
        const wrapper = document.createElement('div');
        wrapper.className = 'leaderboard-card';

        const statsHtml = buildStatsHtml(person);

        wrapper.innerHTML = `
            <span class="rank">${rank}</span>
            <img class="avatar" src="${person.avatar}" alt="${person.name}">
            <div class="user-info">
                <div class="user-name">${person.name}</div>
                <div class="user-title">${person.title}</div>
            </div>
            <div class="stats">
                ${statsHtml}
            </div>
            <div class="total-section">
                <div>
                    <span class="total-label">TOTAL</span>
                    <div class="total-score">
                        <i class="fas fa-star star-icon"></i>
                        <span class="score-value">${person.total}</span>
                    </div>
                </div>
            </div>
            <button class="expand-btn" aria-label="Expand details">
                <i class="fas fa-chevron-down"></i>
            </button>
        `;

        // Add expandable details section
        const details = document.createElement('div');
        details.className = 'card-details';
        details.innerHTML = `
            <div class="details-grid">
                <div class="detail-item">
                    <i class="fas fa-building"></i>
                    <span>Department: ${person.department}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-desktop"></i>
                    <span>Presentations: ${person.presentations}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-gem"></i>
                    <span>Reviews: ${person.reviews}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-users"></i>
                    <span>Mentoring: ${person.mentoring}</span>
                </div>
            </div>
        `;

        // Wrap card content and details
        const container = document.createElement('div');
        container.className = 'leaderboard-card';

        const mainRow = document.createElement('div');
        mainRow.className = 'card-main-row';
        mainRow.innerHTML = wrapper.innerHTML;

        container.appendChild(mainRow);
        container.appendChild(details);

        // Expand/collapse handler
        container.addEventListener('click', (e) => {
            const btn = mainRow.querySelector('.expand-btn');
            if (e.target.closest('.expand-btn') || e.target === btn) {
                btn.classList.toggle('expanded');
                details.classList.toggle('visible');
            }
        });

        return container;
    }

    function buildStatsHtml(person) {
        let html = '';
        if (person.presentations > 0) {
            html += `
                <div class="stat-item">
                    <i class="fas fa-desktop stat-icon"></i>
                    <span class="stat-value">${person.presentations}</span>
                </div>`;
        }
        if (person.reviews > 0) {
            html += `
                <div class="stat-item">
                    <i class="fas fa-gem stat-icon"></i>
                    <span class="stat-value">${person.reviews}</span>
                </div>`;
        }
        if (person.mentoring > 0) {
            html += `
                <div class="stat-item">
                    <i class="fas fa-users stat-icon"></i>
                    <span class="stat-value">${person.mentoring}</span>
                </div>`;
        }
        return html;
    }

    function getFilteredAndSortedData() {
        let data = [...leaderboardData];

        // Department filter
        const deptValue = departmentFilter.value;
        if (deptValue !== 'all') {
            data = data.filter(p => p.department === deptValue);
        }

        // Sort
        const sortValue = sortBy.value;
        switch (sortValue) {
            case 'total-desc':
                data.sort((a, b) => b.total - a.total);
                break;
            case 'total-asc':
                data.sort((a, b) => a.total - b.total);
                break;
            case 'name-asc':
                data.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                data.sort((a, b) => b.name.localeCompare(a.name));
                break;
        }

        return data;
    }

    // Event listeners
    departmentFilter.addEventListener('change', () => {
        renderLeaderboard(getFilteredAndSortedData());
    });

    periodFilter.addEventListener('change', () => {
        renderLeaderboard(getFilteredAndSortedData());
    });

    sortBy.addEventListener('change', () => {
        renderLeaderboard(getFilteredAndSortedData());
    });

    // Initial render
    renderLeaderboard(getFilteredAndSortedData());
});
