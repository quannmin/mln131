// Example code to integrate ethnic_groups_museum.json into museum.html

// 1. Load the JSON data
async function loadEthnicGroups() {
  try {
    const response = await fetch('./ethnic_groups_museum.json');
    const ethnicGroups = await response.json();
    return ethnicGroups;
  } catch (error) {
    console.error('Error loading ethnic groups:', error);
    return [];
  }
}

// 2. Filter ethnic groups by room
function getEthnicGroupsByRoom(ethnicGroups, roomNumber) {
  if (roomNumber === 1) {
    return ethnicGroups.filter(group => group.id >= 1 && group.id <= 18);
  } else if (roomNumber === 2) {
    return ethnicGroups.filter(group => group.id >= 19 && group.id <= 36);
  } else if (roomNumber === 3) {
    return ethnicGroups.filter(group => group.id >= 37 && group.id <= 54);
  }
  return [];
}

// 3. Render ethnic group cards for a specific room
function renderEthnicGroupCards(groups, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = ''; // Clear existing content

  groups.forEach(group => {
    const card = document.createElement('div');
    card.className = 'ethnic-group-card';
    card.innerHTML = `
      <div class="card-image">
        <img src="${group.image}" alt="${group.name}" loading="lazy" />
      </div>
      <div class="card-content">
        <h3 class="ethnic-name">Dân tộc ${group.name}</h3>
        <p class="ethnic-description">${group.description}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// 4. Initialize museum rooms
async function initializeMuseum() {
  const ethnicGroups = await loadEthnicGroups();

  // Room 1
  const room1Groups = getEthnicGroupsByRoom(ethnicGroups, 1);
  renderEthnicGroupCards(room1Groups, 'room1-container');

  // Room 2
  const room2Groups = getEthnicGroupsByRoom(ethnicGroups, 2);
  renderEthnicGroupCards(room2Groups, 'room2-container');

  // Room 3
  const room3Groups = getEthnicGroupsByRoom(ethnicGroups, 3);
  renderEthnicGroupCards(room3Groups, 'room3-container');

  console.log(`Loaded ${ethnicGroups.length} ethnic groups`);
  console.log(`Room 1: ${room1Groups.length} groups`);
  console.log(`Room 2: ${room2Groups.length} groups`);
  console.log(`Room 3: ${room3Groups.length} groups`);
}

// 5. Search functionality
function searchEthnicGroups(ethnicGroups, searchTerm) {
  const term = searchTerm.toLowerCase();
  return ethnicGroups.filter(group =>
    group.name.toLowerCase().includes(term) ||
    group.description.toLowerCase().includes(term)
  );
}

// 6. Get single ethnic group by ID
function getEthnicGroupById(ethnicGroups, id) {
  return ethnicGroups.find(group => group.id === id);
}

// 7. Modal display for detailed view
function showEthnicGroupModal(group) {
  const modal = document.getElementById('ethnic-modal');
  if (!modal) return;

  const modalContent = `
    <div class="modal-content">
      <span class="close-modal">&times;</span>
      <div class="modal-image">
        <img src="${group.image}" alt="${group.name}" />
      </div>
      <h2>Dân tộc ${group.name}</h2>
      <div class="modal-description">
        <p>${group.description}</p>
      </div>
    </div>
  `;

  modal.innerHTML = modalContent;
  modal.style.display = 'block';

  // Close modal functionality
  const closeBtn = modal.querySelector('.close-modal');
  closeBtn.onclick = () => {
    modal.style.display = 'none';
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
}

// 8. Example: Get statistics
function getEthnicGroupsStatistics(ethnicGroups) {
  return {
    total: ethnicGroups.length,
    room1: ethnicGroups.filter(g => g.id >= 1 && g.id <= 18).length,
    room2: ethnicGroups.filter(g => g.id >= 19 && g.id <= 36).length,
    room3: ethnicGroups.filter(g => g.id >= 37 && g.id <= 54).length,
    averageDescriptionLength: Math.round(
      ethnicGroups.reduce((sum, g) => sum + g.description.length, 0) / ethnicGroups.length
    )
  };
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initializeMuseum();
});

// Export for use in other modules
export {
  loadEthnicGroups,
  getEthnicGroupsByRoom,
  renderEthnicGroupCards,
  searchEthnicGroups,
  getEthnicGroupById,
  showEthnicGroupModal,
  getEthnicGroupsStatistics
};
