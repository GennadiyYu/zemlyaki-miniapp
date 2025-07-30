// Динамическое добавление участников
const form = document.getElementById('addMemberForm');
const membersList = document.getElementById('membersList');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = form.name.value.trim();
  const interests = form.interests.value.trim();
  const tg = form.tg.value.trim();
  const photo = form.photo.value.trim();
  if (!name || !tg) return;
  const card = document.createElement('div');
  card.className = 'member-card';
  card.innerHTML = `
    <img src="${photo ? photo : 'assets/icon_user.png'}" alt="user"/>
    <div class="member-info">
      <span>${name}</span>
      ${interests ? `<div class="interests">${interests}</div>` : ''}
      <a href="${tg}" target="_blank">Профиль</a>
    </div>
  `;
  membersList.appendChild(card);
  form.reset();
});
