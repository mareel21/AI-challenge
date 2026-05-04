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
        container.class
