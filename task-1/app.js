document.addEventListener('DOMContentLoaded', () => {
    const leaderboardEl = document.getElementById('leaderboard');
    const podiumEl = document.getElementById('podium-section');
    const departmentFilter = document.getElementById('department-filter');
    const periodFilter = document.getElementById('period-filter');
    const sortBy = document.getElementById('sort-by');

    departments.forEach(dept => {
        const option = document.createElement('option');
        option.value = dept;
        option.textContent = dept;
        departmentFilter.appendChild(option);
    });

    function renderPodium(data) {
        podiumEl.innerHTML = '';
        if (data.length === 0) return;
        const slots = [
            { person: data[1] || null, rank: 2 },
            { person: data[0] || null, rank: 1 },
            { person: data[2] || null, rank: 3 },
        ];
        const badgeColors  = { 1: '#f59e0b', 2: '#94a3b8', 3: '#b45309' };
        const blockHeights = { 1: 160, 2: 118, 3: 98 };
        const blockColors  = { 1: '#fde68a', 2: '#cbd5e1', 3: '#cbd5e1' };
        slots.forEach(({ person, rank }) => {
            const slot = document.createElement('div');
            slot.className = `podium-slot podium-rank-${rank}`;
            if (!person) { podiumEl.appendChild(slot); return; }
            const pillClass = rank === 1 ? 'podium-pill podium-pill--gold' : 'podium-pill';
            slot.innerHTML = `
                <div class="podium-avatar-wrap">
                    <img class="podium-avatar podium-avatar--${rank}" src="${person.avatar}" alt="${person.name}">
                    <div class="podium-badge" style="background:${badgeColors[rank]}">${rank}</div>
                </div>
                <div class="podium-name">${person.name}</div>
                <div class="podium-title">${person.title}</div>
                <div class="${pillClass}"><i class="fas fa-star"></i> ${person.total}</div>
                <div class="podium-block" style="height:${blockHeights[rank]}px;background:${blockColors[rank]}">
                    <span class="podium-block-num">${rank}</span>
                </div>`;
            podiumEl.appendChild(slot);
        });
    }

    function renderLeaderboard(data) {
        leaderboardEl.innerHTML = '';
        data.forEach((person, index) => {
            leaderboardEl.appendChild(createCard(person, index + 1));
        });
    }

    function createCard(person, rank) {
        const container = document.createElement('div');
        container.className = 'leaderboard-card';
        const mainRow = document.createElement('div');
        mainRow.className = 'card-main-row';
        mainRow.innerHTML = `
            <span class="rank">${rank}</span>
            <img class="avatar" src="${person.avatar}" alt="${person.name}">
            <div class="user-info">
                <div class="user-name">${person.name}</div>
                <div class="user-title">${person.title}</div>
            </div>
            <div class="stats">${buildStatsHtml(person)}</div>
            <div class="total-section">
                <span class="total-label">TOTAL</span>
                <div class="total-score">
                    <i class="fas fa-star star-icon"></i>
                    <span class="score-value">${person.total}</span>
                </div>
            </div>
            <button class="expand-btn"><i class="fas fa-chevron-down"></i></button>`;
        const details = document.createElement('div');
        details.className = 'card-details';
        details.innerHTML = `
            <div class="details-grid">
                <div class="detail-item"><i class="fas fa-building"></i><span>Department: ${person.department}</span></div>
                <div class="detail-item"><i class="fas fa-desktop"></i><span>Presentations: ${person.presentations}</span></div>
                <div class="detail-item"><i class="fas fa-gem"></i><span>Reviews: ${person.reviews}</span></div>
                <div class="detail-item"><i class="fas fa-users"></i><span>Mentoring: ${person.mentoring}</span></div>
            </div>`;
        container.appendChild(mainRow);
        container.appendChild(details);
        container.addEventListener('click', (e) => {
            if (e.target.closest('.expand-btn')) {
                mainRow.querySelector('.expand-btn').classList.toggle('expanded');
                details.classList.toggle('visible');
            }
        });
        return container;
    }

    function buildStatsHtml(person) {
        let html = '';
        if (person.presentations > 0) html += `<div class="stat-item"><i class="fas fa-desktop stat-icon"></i><span class="stat-value">${person.presentations}</span></div>`;
        if (person.reviews > 0)       html += `<div class="stat-item"><i class="fas fa-gem stat-icon"></i><span class="stat-value">${person.reviews}</span></div>`;
        if (person.mentoring > 0)     html += `<div class="stat-item"><i class="fas fa-users stat-icon"></i><span class="stat-value">${person.mentoring}</span></div>`;
        return html;
    }

    function render() {
        const data = getFilteredAndSortedData();
        renderPodium(data);
        renderLeaderboard(data);
    }

    function getFilteredAndSortedData() {
        let data = [...leaderboardData];
        if (departmentFilter.value !== 'all') data = data.filter(p => p.department === departmentFilter.value);
        switch (sortBy.value) {
            case 'total-desc': data.sort((a, b) => b.total - a.total); break;
            case 'total-asc':  data.sort((a, b) => a.total - b.total); break;
            case 'name-asc':   data.sort((a, b) => a.name.localeCompare(b.name)); break;
            case 'name-desc':  data.sort((a, b) => b.name.localeCompare(a.name)); break;
        }
        return data;
    }

    departmentFilter.addEventListener('change', render);
    periodFilter.addEventListener('change', render);
    sortBy.addEventListener('change', render);
    render();
});
