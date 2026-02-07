// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const loadingProgress = document.getElementById('loading-progress');
const landingSection = document.getElementById('landing');
const welcomeSection = document.getElementById('welcome');
const dashboardSection = document.getElementById('dashboard');
const footerSection = document.getElementById('footer');

const enterBtn = document.getElementById('enter-btn');
const viewGalleryBtn = document.getElementById('view-gallery-btn');
const continueToDashboardBtn = document.getElementById('continue-to-dashboard');
const backToTopBtn = document.getElementById('back-to-top');
const addFromFooterBtn = document.getElementById('add-from-footer');
const musicToggle = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');
let musicPlaying = false;

function updateMusicToggleUI() {
    if (!musicToggle) return;
    if (musicPlaying) {
        musicToggle.innerHTML = '<i class="fas fa-volume-up text-xl"></i>';
        musicToggle.classList.remove('text-gray-600', 'animate-pulse');
        musicToggle.classList.add('text-green-700', 'music-pulse');
    } else {
        musicToggle.innerHTML = '<i class="fas fa-music text-xl"></i>';
        musicToggle.classList.remove('text-green-700', 'music-pulse', 'animate-pulse');
        musicToggle.classList.add('text-gray-600');
    }
}

const navItems = document.querySelectorAll('.nav-item');
const sectionContents = document.querySelectorAll('.section-content');
const yearFilters = document.querySelectorAll('.year-filter');
const categoryFilters = document.querySelectorAll('.category-filter');

const photoGrid = document.getElementById('photo-grid');
const videoContainer = document.getElementById('video-container');
const storiesContainer = document.getElementById('stories-container');
const greetingsContainer = document.getElementById('greetings-container');
const timelineContainer = document.getElementById('timeline-container');

const photoModal = document.getElementById('photo-modal');
const slideshowModal = document.getElementById('slideshow-modal');

const memoryTypeBtns = document.querySelectorAll('.memory-type-btn');
const saveMemoryBtn = document.getElementById('save-memory');

// NEW: Toast elements
const deleteToast = document.getElementById('delete-toast');
const toastTitle = document.getElementById('toast-title');
const toastMessage = document.getElementById('toast-message');
const toastCancelBtn = document.getElementById('toast-cancel');
const toastConfirmBtn = document.getElementById('toast-confirm');

// Undo notification elements
const undoNotification = document.getElementById('undo-notification');
const undoDeleteBtn = document.getElementById('undo-delete-btn');
const undoMessage = document.getElementById('undo-message');

// Sample data for the website
const samplePhotos = [
    { id: 1, year: "2024", category: "family", title: "Eid Morning", desc: "The whole family dressed in new clothes for Eid prayer", date: "April 10, 2024", location: "Family Home", emotion: "Joyful" },
    { id: 2, year: "2024", category: "prayer", title: "Eid Prayer", desc: "Community Eid prayer at the local mosque", date: "April 10, 2024", location: "Central Mosque", emotion: "Spiritual" },
    { id: 3, year: "2024", category: "food", title: "Eid Feast", desc: "Traditional dishes prepared by mom and aunts", date: "April 10, 2024", location: "Family Home", emotion: "Grateful" },
    { id: 4, year: "2023", category: "family", title: "Family Gathering", desc: "Cousins reuniting after years apart", date: "April 21, 2023", location: "Grandparents' House", emotion: "Touched" },
    { id: 5, year: "2023", category: "homecoming", title: "Homecoming Journey", desc: "The long journey home to celebrate with family", date: "April 20, 2023", location: "Highway", emotion: "Excited" },
    { id: 6, year: "2023", category: "decorations", title: "Eid Decorations", desc: "Children helping to decorate the house", date: "April 19, 2023", location: "Living Room", emotion: "Creative" },
    { id: 7, year: "2022", category: "family", title: "Eid Gifts", desc: "Exchanging gifts and Eidi (money gifts) with children", date: "May 2, 2022", location: "Family Home", emotion: "Generous" },
    { id: 8, year: "2022", category: "prayer", title: "Takbir Night", desc: "Night before Eid with takbir in the neighborhood", date: "May 1, 2022", location: "Local Community", emotion: "Blessed" },
];

const sampleVideos = [
    { id: 1, year: "2024", title: "Eid Morning Excitement", desc: "Children waking up excited for Eid" },
    { id: 2, year: "2024", title: "Family Greetings", desc: "Warm hugs and greetings after Eid prayer" },
    { id: 3, year: "2023", title: "Eid Feast Preparation", desc: "Cooking traditional dishes together" },
    { id: 4, year: "2023", title: "Homecoming Arrival", desc: "Emotional arrival of family members" },
    { id: 5, year: "2022", title: "Takbir Night", desc: "Community takbir on the night before Eid" },
];

const sampleStories = [
    { id: 1, year: "2024", title: "First Eid as a Married Couple", emotion: "Happy", content: "This was our first Eid together as a married couple. We spent the morning with my family and the afternoon with his. It was beautiful to see how both families welcomed us with open arms." },
    { id: 2, year: "2023", title: "Eid After Grandpa's Passing", emotion: "Bittersweet", content: "This was our first Eid without Grandpa. We missed him terribly, but we felt his presence in every tradition we continued. We read his favorite prayers and told his favorite Eid stories." },
    { id: 3, year: "2022", title: "Eid During the Pandemic", emotion: "Grateful", content: "After two years of limited gatherings due to the pandemic, we could finally celebrate together again. The hugs felt warmer, the food tasted better, and every moment was cherished." },
    { id: 4, year: "2021", title: "Virtual Eid Celebration", emotion: "Innovative", content: "With travel restrictions still in place, we had our first virtual Eid celebration. We video-called all family members, shared screens of old photos, and even had a virtual gift exchange." },
];

const sampleGreetings = [
    { id: 1, name: "Ahmad", message: "Eid Mubarak to all! May Allah accept our fasting and prayers. Wishing you and your family joy, peace, and prosperity." },
    { id: 2, name: "Fatima", message: "May this Eid bring endless blessings, happiness, and peace to your life. Thinking of you all with love." },
    { id: 3, name: "Anonymous", message: "May Allah bless you with happiness and grace your home with warmth and peace. Eid Mubarak!" },
    { id: 4, name: "Omar", message: "On this blessed occasion, I pray that Allah showers His blessings upon you and your family. Have a wonderful Eid!" },
];

const sampleTimeline = [
    { year: "2024", title: "Eid of Reunion", highlight: "First full family gathering since the pandemic", photos: 3, stories: 2, videos: 1 },
    { year: "2023", title: "Eid of Gratitude", highlight: "Thankful for health and togetherness", photos: 4, stories: 3, videos: 2 },
    { year: "2022", title: "Eid of Hope", highlight: "Celebrating with renewed hope for the future", photos: 5, stories: 2, videos: 1 },
    { year: "2021", title: "Virtual Eid", highlight: "Connected through screens but close at heart", photos: 3, stories: 4, videos: 2 },
    { year: "2020", title: "Quiet Eid", highlight: "Simple celebrations with immediate family", photos: 2, stories: 3, videos: 1 },
];

// State variables
let currentSection = 'gallery';
let currentPhotoIndex = 0;
let slideshowInterval;
let isSlideshowPlaying = true;

// NEW: Delete state variables
let photoToDelete = null;
let deletedPhoto = null;
let deletedPhotoIndex = -1;
let undoTimeout = null;
let toastTimeout = null;
let isDarkMode = false;

// Initialize state variables
let userPhotos = [];
let deletedIds = [];
let userVideos = [];
let userStories = [];
let userGreetings = [];

// IndexedDB Configuration
const DB_NAME = 'EidMemoriesDashboardDB';
const DB_VERSION = 2;
const STORES = {
    PHOTOS: 'userPhotos',
    VIDEOS: 'userVideos',
    STORIES: 'userStories',
    GREETINGS: 'userGreetings',
    DELETED: 'deletedMemories'
};

const DbManager = {
    db: null,
    init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, DB_VERSION);
            request.onerror = e => {
                console.error('IndexedDB error:', e);
                resolve(); // Fallback to empty if DB fails
            };
            request.onsuccess = e => {
                this.db = e.target.result;
                resolve();
            };
            request.onupgradeneeded = e => {
                const db = e.target.result;
                if (!db.objectStoreNames.contains(STORES.PHOTOS)) db.createObjectStore(STORES.PHOTOS, { keyPath: 'id' });
                if (!db.objectStoreNames.contains(STORES.VIDEOS)) db.createObjectStore(STORES.VIDEOS, { keyPath: 'id' });
                if (!db.objectStoreNames.contains(STORES.STORIES)) db.createObjectStore(STORES.STORIES, { keyPath: 'id' });
                if (!db.objectStoreNames.contains(STORES.GREETINGS)) db.createObjectStore(STORES.GREETINGS, { keyPath: 'id' });
                if (!db.objectStoreNames.contains(STORES.DELETED)) db.createObjectStore(STORES.DELETED, { keyPath: 'id' });
            };
        });
    },
    async getAll(storeName) {
        if (!this.db) return [];
        return new Promise((resolve) => {
            const transaction = this.db.transaction(storeName, 'readonly');
            const store = transaction.objectStore(storeName);
            const request = store.getAll();
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => resolve([]);
        });
    },
    async save(storeName, data) {
        if (!this.db) return;
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(storeName, 'readwrite');
            const store = transaction.objectStore(storeName);
            const request = store.put(data);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    },
    async delete(storeName, id) {
        if (!this.db) return;
        return new Promise((resolve) => {
            const transaction = this.db.transaction(storeName, 'readwrite');
            const store = transaction.objectStore(storeName);
            const request = store.delete(id);
            request.onsuccess = () => resolve();
            request.onerror = () => resolve();
        });
    }
};

async function migrateFromLocalStorage() {
    const hasMigrated = localStorage.getItem('db_migrated');
    if (hasMigrated) return;

    const localPhotos = JSON.parse(localStorage.getItem('userPhotos') || '[]');
    const localVideos = JSON.parse(localStorage.getItem('userVideos') || '[]');
    const localStories = JSON.parse(localStorage.getItem('userStories') || '[]');
    const localDeleted = JSON.parse(localStorage.getItem('deleted_memories') || '[]');

    for (const item of localPhotos) await DbManager.save(STORES.PHOTOS, item);
    for (const item of localVideos) await DbManager.save(STORES.VIDEOS, item);
    for (const item of localStories) await DbManager.save(STORES.STORIES, item);
    for (const id of localDeleted) await DbManager.save(STORES.DELETED, { id: id.toString() });

    localStorage.setItem('db_migrated', 'true');
    console.log('Migration to IndexedDB complete');
}

// Initialize the website
document.addEventListener('DOMContentLoaded', async function () {
    // Simulate loading progress
    let progress = 0;
    const loadingInterval = setInterval(() => {
        // Slower increment for smoother effect
        progress += Math.random() * 1.5;
        if (progress > 90) progress = 90; // Cap at 90% until fully loaded
        loadingProgress.style.width = `${progress}%`;
    }, 50);

    // Minimum loading time promise (2.5 seconds) to ensure loading screen is seen
    const minLoadTime = new Promise(resolve => setTimeout(resolve, 2500));

    // Initialize DB and Load Data
    await DbManager.init();
    await migrateFromLocalStorage();

    // Load from IndexedDB
    userPhotos = await DbManager.getAll(STORES.PHOTOS);
    userVideos = await DbManager.getAll(STORES.VIDEOS);
    userStories = await DbManager.getAll(STORES.STORIES);
    userGreetings = await DbManager.getAll(STORES.GREETINGS);
    const deletedObjs = await DbManager.getAll(STORES.DELETED);
    deletedIds = deletedObjs.map(obj => obj.id);

    // Sort by ID (timestamp) descending to keep newest first
    userPhotos.sort((a, b) => b.id.localeCompare(a.id));

    // Wait for both data loading and minimum time
    await minLoadTime;

    clearInterval(loadingInterval);
    loadingProgress.style.width = '100%';

    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1000);
    }, 500);

    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Check for dark mode preference
    checkDarkMode();

    // Initialize sample data
    renderPhotos();
    renderVideos();
    renderStories();
    renderGreetings();
    renderTimeline();

    // Setup event listeners
    setupEventListeners();

    // Initialize music
    setupMusic();
});

// NEW: Check dark mode preference
function checkDarkMode() {
    isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDarkMode) {
        deleteToast.classList.add('dark-mode');
        deleteToast.querySelector('.toast-icon').classList.add('dark-mode');
    }
}

// Generate unique ID
function generateId() {
    return Date.now() + Math.random().toString(36).substr(2, 9);
}

// Compress image before saving to stay within localStorage limits (approx 5MB)
function compressImage(file, maxWidth = 1920, quality = 0.85) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;

                // Calculate new dimensions
                if (width > maxWidth) {
                    height = Math.round((height * maxWidth) / width);
                    width = maxWidth;
                }

                canvas.width = width;
                canvas.height = height;

                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                // Compress to JPEG with specified quality
                const dataUrl = canvas.toDataURL('image/jpeg', quality);
                resolve(dataUrl);
            };
            img.onerror = reject;
            img.src = e.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Save photo to storage
async function savePhotoToStorage(file, title, description, year, category) {
    try {
        // Resize and compress to ensure it fits (though IndexedDB has much higher limits)
        const imageData = await compressImage(file);

        const photo = {
            id: generateId(),
            title: title,
            desc: description,
            year: year,
            category: category,
            image: imageData,
            date: new Date().toLocaleDateString(),
            location: 'My Location',
            emotion: 'Happy',
            isUserUpload: true
        };

        // Save to IndexedDB
        await DbManager.save(STORES.PHOTOS, photo);

        // Update memory
        userPhotos.unshift(photo);

        return true;
    } catch (error) {
        console.error('Error saving photo:', error);
        showNotification('Error processing image. Try a smaller file.', 'error');
        return false;
    }
}

// Save story to storage
async function saveStoryToStorage(title, emotion, content, year) {
    try {
        const story = {
            id: 's-' + generateId(),
            title: title,
            emotion: emotion,
            content: content,
            year: year,
            date: new Date().toLocaleDateString(),
            isUserUpload: true
        };

        await DbManager.save(STORES.STORIES, story);
        userStories.unshift(story);
        return true;
    } catch (error) {
        console.error('Error saving story:', error);
        return false;
    }
}

// Save video to storage
async function saveVideoToStorage(title, url, description, year) {
    try {
        const video = {
            id: 'v-' + generateId(),
            title: title,
            url: url,
            desc: description,
            year: year,
            date: new Date().toLocaleDateString(),
            isUserUpload: true
        };

        await DbManager.save(STORES.VIDEOS, video);
        userVideos.unshift(video);
        return true;
    } catch (error) {
        console.error('Error saving video:', error);
        return false;
    }
}

// Save greeting to storage
async function saveGreetingToStorage(name, message) {
    try {
        const greeting = {
            id: 'g-' + generateId(),
            name: name,
            message: message,
            date: new Date().toLocaleDateString(),
            timestamp: Date.now(),
            isUserUpload: true
        };

        await DbManager.save(STORES.GREETINGS, greeting);
        userGreetings.unshift(greeting);
        return true;
    } catch (error) {
        console.error('Error saving greeting:', error);
        return false;
    }
}

// Delete memory from storage (universal for photos, videos, and stories)
async function deleteMemoryFromStorage(memoryId) {
    const idStr = memoryId.toString();

    // Add to persistent deleted list (for sample memories)
    if (!deletedIds.includes(idStr)) {
        deletedIds.push(idStr);
        await DbManager.save(STORES.DELETED, { id: idStr });
    }

    // 1. Check User Photos
    const photoIndex = userPhotos.findIndex(p => p.id.toString() === idStr);
    if (photoIndex !== -1) {
        deletedPhoto = userPhotos[photoIndex];
        deletedPhotoIndex = photoIndex;
        userPhotos.splice(photoIndex, 1);
        await DbManager.delete(STORES.PHOTOS, memoryId);
        return true;
    }

    // 2. Check User Videos
    const videoIndex = userVideos.findIndex(v => v.id.toString() === idStr);
    if (videoIndex !== -1) {
        deletedPhoto = userVideos[videoIndex];
        deletedPhoto.isVideo = true; // Flag for undo
        deletedPhotoIndex = videoIndex;
        userVideos.splice(videoIndex, 1);
        await DbManager.delete(STORES.VIDEOS, memoryId);
        return true;
    }

    // 3. Check User Stories
    const storyIndex = userStories.findIndex(s => s.id.toString() === idStr);
    if (storyIndex !== -1) {
        deletedPhoto = userStories[storyIndex];
        deletedPhoto.isStory = true; // Flag for undo
        deletedPhotoIndex = storyIndex;
        userStories.splice(storyIndex, 1);
        await DbManager.delete(STORES.STORIES, memoryId);
        return true;
    }

    // 4. Check Sample Photos/Videos/Stories
    const samplePhoto = samplePhotos.find(p => ('sample-p-' + p.id).toString() === idStr);
    if (samplePhoto) {
        deletedPhoto = samplePhoto;
        deletedPhotoIndex = -1;
        return true;
    }
    const sampleVideo = sampleVideos.find(v => ('sample-v-' + v.id).toString() === idStr);
    if (sampleVideo) {
        deletedPhoto = sampleVideo;
        deletedPhoto.isVideo = true;
        deletedPhotoIndex = -1;
        return true;
    }
    const sampleStory = sampleStories.find(s => ('sample-s-' + s.id).toString() === idStr);
    if (sampleStory) {
        deletedPhoto = sampleStory;
        deletedPhoto.isStory = true;
        deletedPhotoIndex = -1;
        return true;
    }

    return true;
}

// Undo photo deletion
async function undoPhotoDeletion() {
    // Remove from persistent deleted list
    const photoId = deletedPhoto.isUserUpload ? deletedPhoto.id : (deletedPhoto.isStory ? 'sample-s-' : deletedPhoto.isVideo ? 'sample-v-' : 'sample-p-') + deletedPhoto.id;

    deletedIds = deletedIds.filter(id => id.toString() !== photoId.toString());
    await DbManager.delete(STORES.DELETED, photoId.toString());

    if (deletedPhoto.isUserUpload) {
        if (deletedPhoto.isStory) {
            userStories.splice(deletedPhotoIndex, 0, deletedPhoto);
            await DbManager.save(STORES.STORIES, deletedPhoto);
        } else if (deletedPhoto.isVideo) {
            userVideos.splice(deletedPhotoIndex, 0, deletedPhoto);
            await DbManager.save(STORES.VIDEOS, deletedPhoto);
        } else {
            userPhotos.splice(deletedPhotoIndex, 0, deletedPhoto);
            await DbManager.save(STORES.PHOTOS, deletedPhoto);
        }
    }

    // Clear the undo data
    deletedPhoto = null;
    deletedPhotoIndex = -1;

    // Re-render all
    renderPhotos();
    renderVideos();
    renderStories();
    renderTimeline(); // RESTORED: Update timeline immediately

    return true;
}

// Handle photo upload preview
function handlePhotoUpload(e) {
    const files = e.target.files || e.dataTransfer.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const uploadArea = document.getElementById('upload-area');
            if (uploadArea) {
                uploadArea.innerHTML = `
                            <div class="relative group">
                                <img src="${event.target.result}" alt="Preview" class="max-h-64 max-w-full mx-auto rounded-lg shadow-md transition-transform duration-300 group-hover:scale-[1.02]">
                                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-lg">
                                    <p class="text-white font-semibold bg-black/40 px-3 py-1 rounded-full text-xs">Click or drag to change</p>
                                </div>
                            </div>
                            <p class="text-green-600 mt-4 font-medium flex items-center justify-center gap-2">
                                <i class="fas fa-check-circle"></i> Photo Selected: ${file.name}
                            </p>
                        `;
            }
        };
        reader.readAsDataURL(file);
    } else if (file) {
        showNotification('Please select a valid image file', 'error');
        if (e.target) e.target.value = '';
    }
}

// Properly reset the photo upload form and UI
function resetPhotoForm() {
    const photoUpload = document.getElementById('photo-upload');
    const photoTitle = document.getElementById('photo-title');
    const photoDesc = document.getElementById('photo-desc');
    const uploadArea = document.getElementById('upload-area');

    if (photoUpload) photoUpload.value = '';
    if (photoTitle) photoTitle.value = '';
    if (photoDesc) photoDesc.value = '';

    if (uploadArea) {
        uploadArea.innerHTML = `
                    <i class="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-4" aria-hidden="true"></i>
                    <p class="text-gray-600">Click or drag to upload photo</p>
                    <p class="text-sm text-gray-500 mt-2">JPG, PNG up to 5MB</p>
                `;
    }
}

function resetStoryForm() {
    const storyTitle = document.getElementById('story-title');
    const storyContent = document.getElementById('story-content');
    if (storyTitle) storyTitle.value = '';
    if (storyContent) storyContent.value = '';
}

function resetVideoForm() {
    const videoTitle = document.getElementById('video-title');
    const videoUrl = document.getElementById('video-url');
    const videoDesc = document.getElementById('video-desc');
    if (videoTitle) videoTitle.value = '';
    if (videoUrl) videoUrl.value = '';
    if (videoDesc) videoDesc.value = '';
}

function setupEventListeners() {
    // Navigation buttons
    if (enterBtn) {
        enterBtn.addEventListener('click', () => {
            landingSection.classList.add('hidden');
            welcomeSection.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Animate story items
            setTimeout(animateStoryItems, 300);
        });
    }

    if (viewGalleryBtn) {
        viewGalleryBtn.addEventListener('click', () => {
            landingSection.classList.add('hidden');
            welcomeSection.classList.add('hidden');
            dashboardSection.classList.remove('hidden');
            footerSection.classList.remove('hidden');

            // Set gallery as active
            setActiveNav('gallery');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    if (continueToDashboardBtn) {
        continueToDashboardBtn.addEventListener('click', () => {
            welcomeSection.classList.add('hidden');
            dashboardSection.classList.remove('hidden');
            footerSection.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
                easing: 'cubic-bezier(0.42, 0, 0.58, 1)'
            });
        });
    }

    if (addFromFooterBtn) {
        addFromFooterBtn.addEventListener('click', () => {
            setActiveNav('add-memory');
            window.scrollTo({ top: dashboardSection.offsetTop - 20, behavior: 'smooth' });
        });
    }

    // Dashboard navigation
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            const section = this.getAttribute('data-section');
            setActiveNav(section);

            // Update ARIA attributes for accessibility
            navItems.forEach(navItem => {
                navItem.setAttribute('aria-selected', 'false');
                navItem.classList.remove('active');
            });
            this.setAttribute('aria-selected', 'true');
            this.classList.add('active');

            // If clicking "Add Memories" from navigation
            if (section === 'add-memory' && dashboardSection.classList.contains('hidden')) {
                landingSection.classList.add('hidden');
                welcomeSection.classList.add('hidden');
                dashboardSection.classList.remove('hidden');
                footerSection.classList.remove('hidden');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    // Year and category filters
    yearFilters.forEach(filter => {
        filter.addEventListener('click', function () {
            const year = this.getAttribute('data-year');

            // Update active state
            yearFilters.forEach(f => {
                if (f.getAttribute('data-year') === year) {
                    f.classList.add('active');
                } else {
                    f.classList.remove('active');
                }
            });

            filterPhotos(year, document.querySelector('.category-filter.active').getAttribute('data-category'));
        });
    });

    categoryFilters.forEach(filter => {
        filter.addEventListener('click', function () {
            const category = this.getAttribute('data-category');

            // Update active state
            categoryFilters.forEach(f => {
                if (f.getAttribute('data-category') === category) {
                    f.classList.add('active');
                } else {
                    f.classList.remove('active');
                }
            });

            filterPhotos(document.querySelector('.year-filter.active').getAttribute('data-year'), category);
        });
    });

    // Memory type selection
    memoryTypeBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const type = this.getAttribute('data-type');

            // Update active state
            memoryTypeBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Show corresponding form
            showMemoryForm(type);
        });
    });

    // Save memory
    if (saveMemoryBtn) {
        saveMemoryBtn.addEventListener('click', async function () {
            const activeType = document.querySelector('.memory-type-btn.active');
            if (!activeType) return;

            const type = activeType.getAttribute('data-type');
            let success = false;

            if (type === 'photo') {
                const photoFile = document.getElementById('photo-upload')?.files[0];
                const title = document.getElementById('photo-title')?.value;
                const description = document.getElementById('photo-desc')?.value;
                const year = document.getElementById('photo-year')?.value;
                const category = document.getElementById('photo-category')?.value;

                if (!photoFile) {
                    showNotification('Please upload a photo', 'error');
                    return;
                }
                if (!title) {
                    showNotification('Please add a title for your photo', 'error');
                    return;
                }

                success = await savePhotoToStorage(photoFile, title, description, year, category);
                if (success) {
                    showNotification('Photo saved successfully!', 'success');

                    // NEW: Proper form reset
                    resetPhotoForm();

                    // Refresh gallery
                    renderPhotos();
                    renderTimeline(); // RESTORED: Update timeline immediately
                    filterPhotos('all', 'all');

                    // Switch to gallery view
                    setTimeout(() => {
                        setActiveNav('gallery');
                    }, 500);
                } else {
                    showNotification('Error saving photo', 'error');
                }

            } else if (type === 'story') {
                const title = document.getElementById('story-title')?.value;
                const emotion = document.getElementById('story-emotion')?.value;
                const content = document.getElementById('story-content')?.value;
                const year = document.getElementById('story-year')?.value;

                if (!title || !content) {
                    showNotification('Please fill in all required fields', 'error');
                    return;
                }

                success = await saveStoryToStorage(title, emotion, content, year);
                if (success) {
                    showNotification('Story saved successfully!', 'success');
                    resetStoryForm();
                    renderStories();
                    renderTimeline(); // RESTORED: Update timeline immediately
                    setTimeout(() => setActiveNav('gallery'), 500);
                } else {
                    showNotification('Error saving story', 'error');
                }

            } else if (type === 'video') {
                const title = document.getElementById('video-title')?.value;
                const url = document.getElementById('video-url')?.value;
                const desc = document.getElementById('video-desc')?.value;
                const year = document.getElementById('video-year')?.value;

                if (!title || !url) {
                    showNotification('Please fill in all required fields', 'error');
                    return;
                }

                success = await saveVideoToStorage(title, url, desc, year);
                if (success) {
                    showNotification('Video saved successfully!', 'success');
                    resetVideoForm();
                    renderVideos();
                    renderTimeline(); // RESTORED: Update timeline immediately
                    setTimeout(() => setActiveNav('gallery'), 500);
                } else {
                    showNotification('Error saving video', 'error');
                }
            }
        });
    }

    // Upload area click
    const uploadArea = document.getElementById('upload-area');
    if (uploadArea) {
        uploadArea.addEventListener('click', () => {
            const photoUpload = document.getElementById('photo-upload');
            if (photoUpload) photoUpload.click();
        });
    }

    // Drag and drop for photo upload
    if (uploadArea) {
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('border-green-500', 'bg-green-50');
        });
        uploadArea.addEventListener('dragleave', () => {
            uploadArea.classList.remove('border-green-500', 'bg-green-50');
        });
        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('border-green-500', 'bg-green-50');
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                const photoUpload = document.getElementById('photo-upload');
                if (photoUpload) {
                    photoUpload.files = files;
                    handlePhotoUpload({ target: { files } });
                }
            }
        });
    }

    // Photo upload input handler
    const photoUploadInput = document.getElementById('photo-upload');
    if (photoUploadInput) {
        photoUploadInput.addEventListener('change', handlePhotoUpload);
    }

    // Modal controls
    const closeModalBtn = document.getElementById('close-modal');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            photoModal.classList.add('hidden');
        });
    }

    const closeSlideshowBtn = document.getElementById('close-slideshow');
    if (closeSlideshowBtn) {
        closeSlideshowBtn.addEventListener('click', () => {
            slideshowModal.classList.add('hidden');
            stopSlideshow();
        });
    }

    // Slideshow controls
    const viewSlideshowBtn = document.getElementById('view-slideshow');
    if (viewSlideshowBtn) {
        viewSlideshowBtn.addEventListener('click', openSlideshow);
    }

    const playPauseBtn = document.getElementById('play-pause');
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', toggleSlideshowPlayback);
    }

    const slideshowPrevBtn = document.getElementById('slideshow-prev');
    if (slideshowPrevBtn) {
        slideshowPrevBtn.addEventListener('click', prevSlideshowImage);
    }

    const slideshowNextBtn = document.getElementById('slideshow-next');
    if (slideshowNextBtn) {
        slideshowNextBtn.addEventListener('click', nextSlideshowImage);
    }


    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === photoModal) {
            photoModal.classList.add('hidden');
        }
        if (e.target === slideshowModal) {
            slideshowModal.classList.add('hidden');
            stopSlideshow();
        }
    });

    // Submit greeting
    const submitGreetingBtn = document.getElementById('submit-greeting');
    if (submitGreetingBtn) {
        submitGreetingBtn.addEventListener('click', addGreeting);
    }

    // NEW: Toast functionality event listeners
    if (toastCancelBtn) {
        toastCancelBtn.addEventListener('click', hideDeleteToast);
    }

    if (toastConfirmBtn) {
        toastConfirmBtn.addEventListener('click', confirmDeleteFromToast);
    }

    if (undoDeleteBtn) {
        undoDeleteBtn.addEventListener('click', undoDelete);
    }

    // Modal Delete
    const modalDeleteBtn = document.getElementById('modal-delete');
    if (modalDeleteBtn) {
        modalDeleteBtn.addEventListener('click', function () {
            const allPhotos = [...userPhotos, ...samplePhotos];
            // Filtering deleted photos to get the correct absolute photo
            const visiblePhotos = allPhotos.filter(photo => {
                const photoId = photo.isUserUpload ? photo.id : 'sample-p-' + photo.id;
                return !deletedIds.includes(photoId.toString());
            });
            const photo = visiblePhotos[currentPhotoIndex];
            if (photo) {
                const photoId = photo.isUserUpload ? photo.id : 'sample-p-' + photo.id;
                photoModal.classList.add('hidden');
                showDeleteToast(photoId, currentPhotoIndex, photo.title);
            }
        });
    }

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Listen for dark mode changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        isDarkMode = e.matches;
        if (isDarkMode) {
            deleteToast.classList.add('dark-mode');
            deleteToast.querySelector('.toast-icon').classList.add('dark-mode');
        } else {
            deleteToast.classList.remove('dark-mode');
            deleteToast.querySelector('.toast-icon').classList.remove('dark-mode');
        }
    });
}

// NEW: Music upload element
const localMusicUpload = document.getElementById('local-music-upload');

function setupMusic() {
    if (musicToggle && backgroundMusic) {
        musicToggle.onclick = toggleMusic;

        backgroundMusic.onplay = () => {
            musicPlaying = true;
            updateMusicToggleUI();
        };
        backgroundMusic.onpause = () => {
            musicPlaying = false;
            updateMusicToggleUI();
        };

        backgroundMusic.onerror = () => {
            showNotification("File musik gagal dimuat.", "error");
            musicPlaying = false;
            updateMusicToggleUI();
        };

        // Handle local music upload fallback
        const localMusicUpload = document.getElementById('local-music-upload');
        if (localMusicUpload) {
            localMusicUpload.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const objectUrl = URL.createObjectURL(file);
                    backgroundMusic.src = objectUrl;
                    backgroundMusic.play();
                    showNotification("Musik lokal berhasil dimuat!", "success");
                }
            };
        }
    }
}

function animateStoryItems() {
    const storyItems = document.querySelectorAll('.story-item');
    storyItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('fade-in');
            item.style.opacity = '1';
        }, index * 300);
    });
}

function setActiveNav(section) {
    // Update navigation items
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === section) {
            item.classList.add('active');
        }
    });

    // Update section content
    sectionContents.forEach(content => {
        content.classList.add('hidden');
        if (content.id === section) {
            content.classList.remove('hidden');

            // Reset forms when entering 'add-memory' section
            if (section === 'add-memory') {
                const activeTypeBtn = document.querySelector('.memory-type-btn.active');
                const type = activeTypeBtn ? activeTypeBtn.getAttribute('data-type') : 'photo';
                showMemoryForm(type);
            }
        }
    });

    currentSection = section;
}

function renderPhotos() {
    if (!photoGrid) return;

    photoGrid.innerHTML = '';

    // Combine user photos and sample photos
    const allPhotos = [...userPhotos, ...samplePhotos];

    // Filter out deleted photos
    const visiblePhotos = allPhotos.filter(photo => {
        const photoId = photo.isUserUpload ? photo.id : 'sample-p-' + photo.id;
        return !deletedIds.includes(photoId.toString());
    });

    visiblePhotos.forEach((photo, index) => {
        const photoCard = document.createElement('div');
        photoCard.className = 'memory-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer relative';
        photoCard.setAttribute('data-index', index);
        photoCard.setAttribute('data-year', photo.year);
        photoCard.setAttribute('data-category', photo.category);
        photoCard.setAttribute('data-id', photo.isUserUpload ? photo.id : 'sample-p-' + photo.id);

        // Generate placeholder image based on category
        const colors = {
            family: 'bg-blue-100',
            prayer: 'bg-green-100',
            food: 'bg-amber-100',
            homecoming: 'bg-purple-100',
            decorations: 'bg-pink-100',
            home: 'bg-cyan-100'
        };

        const icons = {
            family: 'fa-people-group',
            prayer: 'fa-hands-praying',
            food: 'fa-utensils',
            homecoming: 'fa-car',
            decorations: 'fa-star',
            home: 'fa-house'
        };

        // Check if this is a user upload with image data
        let imageContent = '';
        if (photo.isUserUpload && photo.image) {
            imageContent = `<img src="${photo.image}" alt="${photo.title} - ${photo.category} category" class="w-full h-48 object-cover">`;
        } else {
            const catColor = colors[photo.category] || 'bg-gray-100';
            const catIcon = icons[photo.category] || 'fa-images';
            const iconColor = photo.category === 'family' ? 'text-blue-500' : photo.category === 'prayer' ? 'text-green-500' : photo.category === 'food' ? 'text-amber-500' : photo.category === 'homecoming' ? 'text-purple-500' : photo.category === 'decorations' ? 'text-pink-500' : 'text-cyan-500';
            imageContent = `<div class="h-48 ${catColor} flex items-center justify-center" aria-label="${photo.title} - ${photo.category} category"><i class="fas ${catIcon} text-4xl ${iconColor}" aria-hidden="true"></i></div>`;
        }

        // Add user badge for user uploads
        const userBadge = photo.isUserUpload ? '<span class="absolute top-2 right-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full font-bold">Your Photo</span>' : '';

        // NEW: Enhanced trash icon with SVG
        const trashIconSVG = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                `;

        photoCard.innerHTML = `
                    <div class="relative overflow-hidden">
                        ${imageContent}
                        ${userBadge}
                        <!-- ENHANCED Trash icon for all photos -->
                        <div class="trash-icon" title="Delete this photo" aria-label="Delete photo">${trashIconSVG}</div>
                    </div>
                    <div class="p-4">
                        <div class="flex justify-between items-start mb-2">
                            <h4 class="font-bold text-gray-800 truncate flex-1">${photo.title}</h4>
                            <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full ml-2 flex-shrink-0">${photo.year}</span>
                        </div>
                        <p class="text-gray-600 text-sm mb-3 line-clamp-2">${photo.desc.substring(0, 70)}...</p>
                        <div class="flex justify-between items-center">
                            <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">${photo.category}</span>
                            <button class="text-green-600 hover:text-green-800 text-sm font-bold view-details" data-index="${index}" aria-label="View details for ${photo.title}">
                                Details <i class="fas fa-arrow-right ml-1" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                `;

        photoGrid.appendChild(photoCard);
    });

    // Add event listeners to view details buttons
    document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const photoId = this.closest('.memory-card').getAttribute('data-id');
            openPhotoModal(photoId);
        });
    });

    // Add event listeners to entire photo cards
    document.querySelectorAll('.memory-card').forEach(card => {
        card.addEventListener('click', function (e) {
            // Don't trigger if clicking on trash icon
            if (e.target.closest('.trash-icon')) {
                return;
            }
            const photoId = this.getAttribute('data-id');
            openPhotoModal(photoId);
        });
    });

    // NEW: Add event listeners to enhanced trash icons
    document.querySelectorAll('.trash-icon').forEach(icon => {
        icon.addEventListener('click', function (e) {
            e.stopPropagation();
            const card = this.closest('.memory-card');
            const photoId = card.getAttribute('data-id');
            const photoIndex = parseInt(card.getAttribute('data-index'));

            // Find the photo in the visible list
            const photo = visiblePhotos[photoIndex];

            if (photo) {
                showDeleteToast(photoId, photoIndex, photo.title);
            }
        });
    });
}

function renderVideos() {
    if (!videoContainer) return;

    videoContainer.innerHTML = '';

    // Combine user videos and sample videos
    const allVideos = [...userVideos, ...sampleVideos];

    // Filter out deleted videos
    const visibleVideos = allVideos.filter(video => {
        const videoId = video.isUserUpload ? video.id : 'sample-v-' + video.id;
        return !deletedIds.includes(videoId.toString());
    });

    visibleVideos.forEach((video, index) => {
        const videoCard = document.createElement('div');
        videoCard.className = 'memory-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer relative';
        videoCard.setAttribute('data-id', video.isUserUpload ? video.id : 'sample-v-' + video.id);

        let videoContent = '';
        if (video.isUserUpload && video.url) {
            videoContent = `
                        <div class="h-48 bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center relative overflow-hidden">
                            <div class="w-full h-full bg-gray-900 flex items-center justify-center">
                                <i class="fas fa-play-circle text-5xl text-purple-500" aria-hidden="true"></i>
                            </div>
                            <span class="absolute top-2 right-2 px-2 py-1 bg-red-500 text-white text-xs rounded-full font-bold">Your Video</span>
                        </div>
                    `;
        } else {
            videoContent = `
                        <div class="h-48 bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center relative">
                            <i class="fas fa-play-circle text-5xl text-purple-500" aria-hidden="true"></i>
                            <div class="absolute bottom-2 right-2 px-2 py-1 bg-black bg-opacity-70 text-white text-xs rounded">
                                2:45
                            </div>
                        </div>
                    `;
        }

        const trashIconSVG = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                `;

        videoCard.innerHTML = `
                    <div class="relative overflow-hidden">
                        ${videoContent}
                        <div class="trash-icon video-trash" title="Delete this video" aria-label="Delete video">${trashIconSVG}</div>
                    </div>
                    <div class="p-4">
                        <div class="flex justify-between items-start mb-2">
                            <h4 class="font-bold text-gray-800 truncate flex-1">${video.title}</h4>
                            <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full ml-2 flex-shrink-0">${video.year}</span>
                        </div>
                        <p class="text-gray-600 text-sm line-clamp-2">${video.desc}</p>
                    </div>
                `;

        videoContainer.appendChild(videoCard);
    });

    // Video trash logic
    videoContainer.querySelectorAll('.video-trash').forEach(icon => {
        icon.addEventListener('click', function (e) {
            e.stopPropagation();
            const card = this.closest('.memory-card');
            const videoId = card.getAttribute('data-id');
            const video = visibleVideos.find(v => (v.id || 'sample-v-' + v.id).toString() === videoId);
            if (video) {
                showDeleteToast(videoId, -1, video.title);
            }
        });
    });
}

function renderStories() {
    if (!storiesContainer) return;

    storiesContainer.innerHTML = '';

    // Combine user stories and sample stories
    const allStories = [...userStories, ...sampleStories];

    // Filter out deleted stories
    const visibleStories = allStories.filter(story => {
        const storyId = story.isUserUpload ? story.id : 'sample-s-' + story.id;
        return !deletedIds.includes(storyId.toString());
    });

    visibleStories.forEach((story, index) => {
        const emotionColors = {
            Happy: 'bg-green-100 text-green-800',
            Bittersweet: 'bg-blue-100 text-blue-800',
            Grateful: 'bg-amber-100 text-amber-800',
            Innovative: 'bg-purple-100 text-purple-800',
            Touched: 'bg-pink-100 text-pink-800',
            Joyful: 'bg-yellow-100 text-yellow-800',
            Spiritual: 'bg-indigo-100 text-indigo-800',
            Creative: 'bg-orange-100 text-orange-800',
            Generous: 'bg-red-100 text-red-800',
            Blessed: 'bg-cyan-100 text-cyan-800',
            Excited: 'bg-lime-100 text-lime-800'
        };

        const storyCard = document.createElement('div');
        storyCard.className = 'memory-card bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 relative';
        storyCard.setAttribute('data-id', story.isUserUpload ? story.id : 'sample-s-' + story.id);

        const emotionBg = emotionColors[story.emotion] || 'bg-gray-100 text-gray-800';
        const userBadge = story.isUserUpload ? '<span class="px-2 py-1 bg-blue-500 text-white text-xs rounded-full font-bold ml-2">Your Story</span>' : '';

        const trashIconSVG = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                `;

        storyCard.innerHTML = `
                    <div class="trash-icon story-trash" title="Delete this story" aria-label="Delete story">${trashIconSVG}</div>
                    <div class="flex justify-between items-start mb-4 flex-wrap gap-2 text-right dir-rtl">
                        <h4 class="text-xl font-bold text-gray-800 flex-1 text-left">${story.title}</h4>
                        <div class="flex gap-2 flex-wrap">
                            <span class="px-3 py-1 ${emotionBg} rounded-full text-sm font-medium">${story.emotion}</span>
                            ${userBadge}
                        </div>
                    </div>
                    <p class="text-gray-700 mb-4 leading-relaxed line-clamp-4">${story.content}</p>
                    <div class="flex justify-between items-center">
                        <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Eid ${story.year}</span>
                        <button class="text-green-600 hover:text-green-800 font-bold text-sm read-more-btn" data-index="${index}" aria-label="Read more about ${story.title}">
                            Read More <i class="fas fa-arrow-right ml-1" aria-hidden="true"></i>
                        </button>
                    </div>
                `;

        storiesContainer.appendChild(storyCard);
    });

    // Story trash logic
    storiesContainer.querySelectorAll('.story-trash').forEach(icon => {
        icon.addEventListener('click', function (e) {
            e.stopPropagation();
            const card = this.closest('.memory-card');
            const storyId = card.getAttribute('data-id');
            const story = visibleStories.find(s => (s.id || 'sample-s-' + s.id).toString() === storyId);
            if (story) {
                showDeleteToast(storyId, -1, story.title);
            }
        });
    });

    // Add event listeners to read more buttons
    document.querySelectorAll('.read-more-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const index = parseInt(this.getAttribute('data-index'));
            const story = visibleStories[index];
            showNotification(`Opening story: "${story.title}"`, 'info');
        });
    });
}

function renderGreetings() {
    if (!greetingsContainer) return;

    greetingsContainer.innerHTML = '';

    // Combine user greetings and sample greetings
    // Sort user greetings by timestamp descending (newest first)
    userGreetings.sort((a, b) => b.timestamp - a.timestamp);

    const allGreetings = [...userGreetings, ...sampleGreetings];

    allGreetings.forEach(greeting => {
        const greetingCard = document.createElement('div');
        greetingCard.className = 'memory-card bg-gradient-to-br from-green-50 to-amber-50 p-6 rounded-2xl shadow-md';

        greetingCard.innerHTML = `
                    <div class="flex items-center mb-4">
                        <div class="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                            ${greeting.name.charAt(0)}
                        </div>
                        <div>
                            <h4 class="font-bold text-gray-800">${greeting.name}</h4>
                            <p class="text-gray-600 text-sm">Eid Mubarak!</p>
                        </div>
                    </div>
                    <p class="text-gray-700 italic">"${greeting.message}"</p>
                `;

        greetingsContainer.appendChild(greetingCard);
    });
}

// NEW: dynamic timeline data aggregation
function getTimelineData() {
    // 1. Combine all data sources
    const allPhotos = [...userPhotos, ...samplePhotos];
    const allVideos = [...userVideos, ...sampleVideos];
    const allStories = [...userStories, ...sampleStories];

    // 2. Filter out deleted items
    const visiblePhotos = allPhotos.filter(item => !deletedIds.includes((item.isUserUpload ? item.id : 'sample-p-' + item.id).toString()));
    const visibleVideos = allVideos.filter(item => !deletedIds.includes((item.isUserUpload ? item.id : 'sample-v-' + item.id).toString()));
    const visibleStories = allStories.filter(item => !deletedIds.includes((item.isUserUpload ? item.id : 'sample-s-' + item.id).toString()));

    // 3. Group by year
    const yearsMap = new Map();

    // Helper to add year if not exists
    const ensureYear = (year) => {
        if (!yearsMap.has(year)) {
            yearsMap.set(year, {
                year: year,
                photos: 0,
                videos: 0,
                stories: 0,
                // These will be determined later
                title: `Eid ${year}`,
                highlight: "Memories collected from this blessed year."
            });
        }
        return yearsMap.get(year);
    };

    visiblePhotos.forEach(p => ensureYear(p.year).photos++);
    visibleVideos.forEach(v => ensureYear(v.year).videos++);
    visibleStories.forEach(s => ensureYear(s.year).stories++);

    // 4. Convert to array and sort (newest year first)
    const timelineData = Array.from(yearsMap.values()).sort((a, b) => b.year - a.year);

    // 5. Enrich with titles/highlights
    // We want to keep original titles/highlights for sample years to maintain the storytelling aspect
    const sampleYearDefaults = {
        "2024": { title: "Eid of Reunion", highlight: "First full family gathering since the pandemic" },
        "2023": { title: "Eid of Gratitude", highlight: "Thankful for health and togetherness" },
        "2022": { title: "Eid of Hope", highlight: "Celebrating with renewed hope for the future" },
        "2021": { title: "Virtual Eid", highlight: "Connected through screens but close at heart" },
        "2020": { title: "Quiet Eid", highlight: "Simple celebrations with immediate family" }
    };

    timelineData.forEach(item => {
        if (sampleYearDefaults[item.year]) {
            item.title = sampleYearDefaults[item.year].title;
            item.highlight = sampleYearDefaults[item.year].highlight;
        } else {
            // Logic for new years
            // Try to find a story title from this year to use as highlight
            const storyFromYear = visibleStories.find(s => s.year === item.year);
            if (storyFromYear) {
                item.highlight = storyFromYear.title;
            }
        }
    });

    return timelineData;
}

function renderTimeline() {
    if (!timelineContainer) return;

    timelineContainer.innerHTML = '';

    // Add a central vertical line for desktop view
    const centerLine = document.createElement('div');
    centerLine.className = 'hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-200 via-green-400 to-green-200 transform -translate-x-1/2 rounded-full -z-10';
    timelineContainer.appendChild(centerLine);

    // GET DYNAMIC DATA
    const timelineData = getTimelineData();

    if (timelineData.length === 0) {
        timelineContainer.innerHTML = '<div class="text-center py-12 text-gray-500">No timeline memories yet. Add some memories to see your journey!</div>';
        return;
    }

    timelineData.forEach((item, index) => {
        const isEven = index % 2 === 0;

        const timelineItem = document.createElement('div');
        timelineItem.className = `relative flex flex-col md:flex-row items-center mb-16 md:mb-24 w-full group`;

        // Marker (Year Bubble)
        const marker = `
            <div class="order-1 md:order-2 w-full md:w-2/12 flex justify-center py-4 md:py-0 relative z-10">
                <div class="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center text-white font-bold shadow-xl border-4 border-white ring-4 ring-green-100 transform transition-transform duration-300 group-hover:scale-110">
                    <div class="flex flex-col items-center">
                        <span class="text-xs md:text-xs opacity-80 uppercase tracking-widest font-light">Eid</span>
                        <span class="text-base md:text-xl leading-none">${item.year}</span>
                    </div>
                </div>
            </div>
        `;

        // Content Card
        const contentCard = `
            <div class="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1 relative overflow-hidden h-full">
                <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-green-50 to-transparent rounded-bl-full opacity-60"></div>
                
                <div class="relative z-10">
                    <div class="flex items-center gap-3 mb-3">
                        <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold tracking-wide uppercase">Highlight</span>
                        <div class="h-px bg-gray-200 flex-1"></div>
                    </div>
                    
                    <h4 class="text-2xl font-bold text-gray-800 mb-2 font-serif">${item.title}</h4>
                    <p class="text-gray-600 mb-6 leading-relaxed">${item.highlight}</p>
                    
                    <div class="flex flex-wrap gap-2 text-sm font-medium text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-100">
                        <span class="flex items-center px-2">
                            <i class="fas fa-image mr-2 text-green-500" aria-hidden="true"></i> ${item.photos} Photos
                        </span>
                        <span class="flex items-center px-2">
                            <i class="fas fa-book-open mr-2 text-amber-500" aria-hidden="true"></i> ${item.stories} Stories
                        </span>
                        <span class="flex items-center px-2">
                            <i class="fas fa-video mr-2 text-purple-500" aria-hidden="true"></i> ${item.videos} Videos
                        </span>
                    </div>
                </div>
            </div>
        `;

        // Visual (Image/Pattern)
        const visual = `
            <div class="h-56 md:h-64 rounded-3xl overflow-hidden shadow-xl border-4 border-white relative group-hover:shadow-2xl transition-all duration-300 w-full flex-shrink-0">
                <!-- Uniform Premium Gradient Background -->
                <div class="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-800 opacity-100 transition-transform duration-500 group-hover:scale-105"></div>
                
                <!-- Pattern overlay -->
                <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle, white 2px, transparent 2.5px); background-size: 20px 20px;"></div>
                
                <div class="absolute inset-0 flex items-center justify-center">
                    <div class="text-center p-6 text-white transform transition-transform duration-500 group-hover:scale-110">
                        <div class="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/30 shadow-lg">
                            <i class="fas fa-mosque text-3xl" aria-hidden="true"></i>
                        </div>
                        <p class="font-serif text-lg italic opacity-95 tracking-wide">"Memories of ${item.year}"</p>
                    </div>
                </div>
            </div>
        `;

        // Determine Layout
        let leftCol, rightCol;

        if (isEven) {
            // Even: Content Left, Visual Right on Desktop
            leftCol = `<div class="order-2 md:order-1 w-full md:w-5/12 px-4 md:pl-0 md:pr-12 mb-6 md:mb-0 md:text-right">${contentCard}</div>`;
            rightCol = `<div class="order-3 md:order-3 w-full md:w-5/12 px-4 md:pr-0 md:pl-12 mb-6 md:mb-0">${visual}</div>`;
        } else {
            // Odd: Visual Left, Content Right on Desktop
            // On mobile we keep consistent order: Content then Visual (via generic order classes)
            // But to achieve desktop swap, we swap the variables positions in DOM

            // Visual Div (Left on Desktop)
            leftCol = `<div class="order-3 md:order-1 w-full md:w-5/12 px-4 md:px-0 md:pr-12 mb-6 md:mb-0">${visual}</div>`;

            // Content Div (Right on Desktop)
            rightCol = `<div class="order-2 md:order-3 w-full md:w-5/12 px-4 md:px-0 md:pl-12 mb-6 md:mb-0 md:text-left">${contentCard}</div>`;
        }

        timelineItem.innerHTML = leftCol + marker + rightCol;
        timelineContainer.appendChild(timelineItem);
    });
}

function filterPhotos(year, category) {
    const photoCards = document.querySelectorAll('.memory-card[data-year]');

    photoCards.forEach(card => {
        const cardYear = card.getAttribute('data-year');
        const cardCategory = card.getAttribute('data-category');

        const yearMatch = year === 'all' || cardYear === year;
        const categoryMatch = category === 'all' || cardCategory === category;

        requestAnimationFrame(() => {
            if (yearMatch && categoryMatch) {
                card.style.display = 'block';
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
}

function showMemoryForm(type) {
    const formContainer = document.getElementById('memory-form-container');
    if (!formContainer) return;

    if (type === 'photo') {
        formContainer.innerHTML = `
                    <div id="photo-form">
                        <div class="mb-4">
                            <label class="block text-gray-700 font-medium mb-2">Upload Photo</label>
                            <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 transition-colors cursor-pointer" id="upload-area">
                                <i class="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-4" aria-hidden="true"></i>
                                <p class="text-gray-600">Click or drag to upload photo</p>
                                <p class="text-sm text-gray-500 mt-2">JPG, PNG up to 5MB</p>
                            </div>
                            <input type="file" id="photo-upload" class="hidden" accept="image/*">
                        </div>
                        
                        <div class="mb-4">
                            <label class="block text-gray-700 font-medium mb-2">Photo Title</label>
                            <input type="text" id="photo-title" class="w-full p-3 rounded-lg border border-gray-300" placeholder="Eid morning with family">
                        </div>
                        
                        <div class="mb-4">
                            <label class="block text-gray-700 font-medium mb-2">Description</label>
                            <textarea id="photo-desc" class="w-full p-3 rounded-lg border border-gray-300 h-32" placeholder="Share the story behind this photo..."></textarea>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-gray-700 font-medium mb-2">Year</label>
                                <select id="photo-year" class="w-full p-3 rounded-lg border border-gray-300">
                                    <option value="2026">Eid 2026</option>
                                    <option value="2025">Eid 2025</option>
                                    <option value="2024">Eid 2024</option>
                                    <option value="2023">Eid 2023</option>
                                </select>
                            </div>
                            
                            <div>
                                <label class="block text-gray-700 font-medium mb-2">Category</label>
                                <select id="photo-category" class="w-full p-3 rounded-lg border border-gray-300">
                                    <option value="family">Family</option>
                                    <option value="home">Home</option>
                                    <option value="homecoming">Homecoming</option>
                                    <option value="prayer">Prayer</option>
                                    <option value="food">Food</option>
                                    <option value="decorations">Decorations</option>
                                </select>
                            </div>
                        </div>
                    </div>
                `;

        // Re-attach event listeners for upload area
        setTimeout(() => {
            const newUploadArea = document.getElementById('upload-area');
            const newPhotoUpload = document.getElementById('photo-upload');

            if (newUploadArea && newPhotoUpload) {
                newUploadArea.addEventListener('click', () => {
                    newPhotoUpload.click();
                });

                newPhotoUpload.addEventListener('click', function () {
                    this.value = ''; // Ensure change event fires even if same file is selected
                });

                newPhotoUpload.addEventListener('change', handlePhotoUpload);

                // Add drag and drop handlers
                ['dragover', 'dragleave', 'drop'].forEach(eventName => {
                    newUploadArea.addEventListener(eventName, function (e) {
                        e.preventDefault();
                        if (eventName === 'dragover') {
                            this.classList.add('border-green-500', 'bg-green-50');
                        } else if (eventName === 'dragleave') {
                            this.classList.remove('border-green-500', 'bg-green-50');
                        } else if (eventName === 'drop') {
                            this.classList.remove('border-green-500', 'bg-green-50');
                            const files = e.dataTransfer.files;
                            if (files.length > 0) {
                                newPhotoUpload.files = files;
                                handlePhotoUpload({ target: { files } });
                            }
                        }
                    });
                });
            }
        }, 50);

    } else if (type === 'story') {
        formContainer.innerHTML = `
                    <div id="story-form">
                        <div class="mb-4">
                            <label class="block text-gray-700 font-medium mb-2">Story Title</label>
                            <input type="text" id="story-title" class="w-full p-3 rounded-lg border border-gray-300" placeholder="A memorable Eid moment">
                        </div>
                        
                        <div class="mb-4">
                            <label class="block text-gray-700 font-medium mb-2">Emotion</label>
                            <select id="story-emotion" class="w-full p-3 rounded-lg border border-gray-300">
                                <option value="happy">Happy</option>
                                <option value="touched">Touched</option>
                                <option value="grateful">Grateful</option>
                                <option value="nostalgic">Nostalgic</option>
                                <option value="peaceful">Peaceful</option>
                                <option value="excited">Excited</option>
                            </select>
                        </div>
                        
                        <div class="mb-4">
                            <label class="block text-gray-700 font-medium mb-2">Your Story</label>
                            <textarea id="story-content" class="w-full p-3 rounded-lg border border-gray-300 h-48" placeholder="Tell us about your Eid memory..."></textarea>
                        </div>
                        
                        <div class="mb-4">
                            <label class="block text-gray-700 font-medium mb-2">Year</label>
                            <select id="story-year" class="w-full p-3 rounded-lg border border-gray-300">
                                <option value="2026">Eid 2026</option>
                                <option value="2025">Eid 2025</option>
                                <option value="2024">Eid 2024</option>
                                <option value="2023">Eid 2023</option>
                            </select>
                        </div>
                    </div>
                `;
    } else if (type === 'video') {
        formContainer.innerHTML = `
                    <div id="video-form">
                        <div class="mb-4">
                            <label class="block text-gray-700 font-medium mb-2">Video Title</label>
                            <input type="text" id="video-title" class="w-full p-3 rounded-lg border border-gray-300" placeholder="Funny moments from Eid morning">
                        </div>
                        
                        <div class="mb-4">
                            <label class="block text-gray-700 font-medium mb-2">Video URL</label>
                            <input type="text" id="video-url" class="w-full p-3 rounded-lg border border-gray-300" placeholder="YouTube, Vimeo, or direct link">
                        </div>
                        
                        <div class="mb-4">
                            <label class="block text-gray-700 font-medium mb-2">Description</label>
                            <textarea id="video-desc" class="w-full p-3 rounded-lg border border-gray-300 h-32" placeholder="What does this video capture?"></textarea>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-gray-700 font-medium mb-2">Year</label>
                                <select id="video-year" class="w-full p-3 rounded-lg border border-gray-300">
                                    <option value="2026">Eid 2026</option>
                                    <option value="2025">Eid 2025</option>
                                    <option value="2024">Eid 2024</option>
                                    <option value="2023">Eid 2023</option>
                                </select>
                            </div>
                            
                            <div>
                                <label class="block text-gray-700 font-medium mb-2">Duration (minutes)</label>
                                <input type="number" id="video-duration" class="w-full p-3 rounded-lg border border-gray-300" placeholder="5" min="1" max="60">
                            </div>
                        </div>
                    </div>
                `;
    }
}

function openPhotoModal(photoId) {
    const allPhotos = [...userPhotos, ...samplePhotos];
    const photo = allPhotos.find(p => (p.isUserUpload ? p.id : 'sample-p-' + p.id).toString() === photoId.toString());

    if (!photo) return;

    const visiblePhotos = allPhotos.filter(p => !deletedIds.includes((p.isUserUpload ? p.id : 'sample-p-' + p.id).toString()));
    currentPhotoIndex = visiblePhotos.indexOf(photo);

    // Update modal content
    document.getElementById('modal-title').textContent = photo.title;
    document.getElementById('modal-full-title').textContent = photo.title;
    document.getElementById('modal-year').textContent = `Eid ${photo.year}`;
    document.getElementById('modal-category').textContent = photo.category;
    document.getElementById('modal-description').textContent = photo.desc;
    document.getElementById('modal-date').textContent = photo.date;
    document.getElementById('modal-location').textContent = photo.location;
    document.getElementById('modal-emotion').textContent = photo.emotion;

    // Set image
    const modalImage = document.getElementById('modal-image');
    const colors = {
        family: 'bg-blue-200',
        prayer: 'bg-green-200',
        food: 'bg-amber-200',
        homecoming: 'bg-purple-200',
        decorations: 'bg-pink-200',
        home: 'bg-cyan-200'
    };

    const icons = {
        family: 'fa-people-group',
        prayer: 'fa-hands-praying',
        food: 'fa-utensils',
        homecoming: 'fa-car',
        decorations: 'fa-star',
        home: 'fa-house'
    };

    if (photo.isUserUpload && photo.image) {
        // Display user-uploaded image
        modalImage.src = photo.image;
        modalImage.alt = `${photo.title} - Eid ${photo.year} ${photo.category} memory`;
        modalImage.className = 'w-full h-auto rounded-lg shadow-2xl max-h-[75vh] object-contain bg-gray-950';
    } else {
        // Display placeholder
        modalImage.alt = `${photo.title} - Eid ${photo.year} ${photo.category} memory`;
        modalImage.className = `w-full h-96 rounded-lg shadow-lg ${colors[photo.category] || 'bg-gray-200'} flex items-center justify-center`;
        const iconClass = icons[photo.category] || 'fa-images';
        const colorClass = photo.category === 'family' ? 'text-blue-500' : photo.category === 'prayer' ? 'text-green-500' : photo.category === 'food' ? 'text-amber-500' : photo.category === 'homecoming' ? 'text-purple-500' : photo.category === 'decorations' ? 'text-pink-500' : 'text-cyan-500';
        modalImage.innerHTML = `<i class="fas ${iconClass} text-8xl ${colorClass}" aria-hidden="true"></i>`;
    }

    // Show modal
    photoModal.classList.remove('hidden');

    // Setup navigation between photos
    const prevPhotoBtn = document.getElementById('prev-photo');
    const nextPhotoBtn = document.getElementById('next-photo');

    if (prevPhotoBtn) {
        prevPhotoBtn.onclick = showPrevPhoto;
        // Disable if it's the first photo
        if (currentPhotoIndex === 0) {
            prevPhotoBtn.disabled = true;
            prevPhotoBtn.classList.add('opacity-50', 'cursor-not-allowed');
            prevPhotoBtn.classList.remove('hover:bg-gray-50');
        } else {
            prevPhotoBtn.disabled = false;
            prevPhotoBtn.classList.remove('opacity-50', 'cursor-not-allowed');
            prevPhotoBtn.classList.add('hover:bg-gray-50');
        }
    }

    if (nextPhotoBtn) {
        nextPhotoBtn.onclick = showNextPhoto;
        // Disable if it's the last photo
        if (currentPhotoIndex === visiblePhotos.length - 1) {
            nextPhotoBtn.disabled = true;
            nextPhotoBtn.classList.add('opacity-50', 'cursor-not-allowed');
            nextPhotoBtn.classList.remove('hover:bg-gray-50');
        } else {
            nextPhotoBtn.disabled = false;
            nextPhotoBtn.classList.remove('opacity-50', 'cursor-not-allowed');
            nextPhotoBtn.classList.add('hover:bg-gray-50');
        }
    }
}

function showPrevPhoto() {
    if (currentPhotoIndex <= 0) return;

    const allPhotos = [...userPhotos, ...samplePhotos];
    const visiblePhotos = allPhotos.filter(p => !deletedIds.includes((p.isUserUpload ? p.id : 'sample-p-' + p.id).toString()));

    currentPhotoIndex--;
    const nextPhoto = visiblePhotos[currentPhotoIndex];
    const nextId = nextPhoto.isUserUpload ? nextPhoto.id : 'sample-p-' + nextPhoto.id;
    openPhotoModal(nextId);
}

function showNextPhoto() {
    const allPhotos = [...userPhotos, ...samplePhotos];
    const visiblePhotos = allPhotos.filter(p => !deletedIds.includes((p.isUserUpload ? p.id : 'sample-p-' + p.id).toString()));

    if (currentPhotoIndex >= visiblePhotos.length - 1) return;

    currentPhotoIndex++;
    const nextPhoto = visiblePhotos[currentPhotoIndex];
    const nextId = nextPhoto.isUserUpload ? nextPhoto.id : 'sample-p-' + nextPhoto.id;
    openPhotoModal(nextId);
}

function openSlideshow() {
    // Reset to first photo
    const allPhotos = [...userPhotos, ...samplePhotos];
    const visiblePhotos = allPhotos.filter(p => !deletedIds.includes((p.isUserUpload ? p.id : 'sample-p-' + p.id).toString()));

    if (visiblePhotos.length === 0) {
        showNotification('No photos to show in slideshow', 'info');
        return;
    }

    currentPhotoIndex = 0;
    updateSlideshowImage();

    // Show modal
    slideshowModal.classList.remove('hidden');

    // Start slideshow
    startSlideshow();
}

function startSlideshow() {
    isSlideshowPlaying = true;
    const playPauseIcon = document.getElementById('play-pause-icon');
    if (playPauseIcon) playPauseIcon.className = 'fas fa-pause';

    // Clear any existing interval
    stopSlideshow();

    // Initialize timeout array if needed
    if (!window.slideshowTimeouts) {
        window.slideshowTimeouts = [];
    }

    // Start new interval
    slideshowInterval = setInterval(() => {
        if (isSlideshowPlaying) {
            const allPhotos = [...userPhotos, ...samplePhotos];
            const visiblePhotos = allPhotos.filter(p => !deletedIds.includes((p.isUserUpload ? p.id : 'sample-p-' + p.id).toString()));
            currentPhotoIndex = (currentPhotoIndex + 1) % visiblePhotos.length;
            updateSlideshowImage();
        }
    }, 3000);
}

function stopSlideshow() {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
    }

    // Clear any pending timeouts
    if (window.slideshowTimeouts) {
        window.slideshowTimeouts.forEach(timeout => clearTimeout(timeout));
        window.slideshowTimeouts = [];
    }
}

function toggleSlideshowPlayback() {
    isSlideshowPlaying = !isSlideshowPlaying;
    const playPauseIcon = document.getElementById('play-pause-icon');

    if (isSlideshowPlaying) {
        if (playPauseIcon) playPauseIcon.className = 'fas fa-pause';
        startSlideshow();
    } else {
        if (playPauseIcon) playPauseIcon.className = 'fas fa-play';
    }
}

function prevSlideshowImage() {
    const allPhotos = [...userPhotos, ...samplePhotos];
    const visiblePhotos = allPhotos.filter(p => !deletedIds.includes((p.isUserUpload ? p.id : 'sample-p-' + p.id).toString()));
    currentPhotoIndex = (currentPhotoIndex - 1 + visiblePhotos.length) % visiblePhotos.length;
    updateSlideshowImage();

    // Reset slideshow timer
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        if (isSlideshowPlaying) {
            startSlideshow();
        }
    }
}

function nextSlideshowImage() {
    const allPhotos = [...userPhotos, ...samplePhotos];
    const visiblePhotos = allPhotos.filter(p => !deletedIds.includes((p.isUserUpload ? p.id : 'sample-p-' + p.id).toString()));
    currentPhotoIndex = (currentPhotoIndex + 1) % visiblePhotos.length;
    updateSlideshowImage();

    // Reset slideshow timer
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        if (isSlideshowPlaying) {
            startSlideshow();
        }
    }
}

function updateSlideshowImage() {
    const allPhotos = [...userPhotos, ...samplePhotos];
    const visiblePhotos = allPhotos.filter(p => !deletedIds.includes((p.isUserUpload ? p.id : 'sample-p-' + p.id).toString()));
    const photo = visiblePhotos[currentPhotoIndex];

    if (!photo) return;

    // Update image
    const slideshowImage = document.getElementById('slideshow-image');
    const colors = {
        family: 'bg-blue-200',
        prayer: 'bg-green-200',
        food: 'bg-amber-200',
        homecoming: 'bg-purple-200',
        decorations: 'bg-pink-200',
        home: 'bg-cyan-200'
    };

    const icons = {
        family: 'fa-people-group',
        prayer: 'fa-hands-praying',
        food: 'fa-utensils',
        homecoming: 'fa-car',
        decorations: 'fa-star',
        home: 'fa-house'
    };

    if (photo.isUserUpload && photo.image) {
        slideshowImage.src = photo.image;
        slideshowImage.alt = photo.title;
        slideshowImage.className = 'max-w-full h-auto max-h-[75vh] rounded-lg shadow-2xl object-contain bg-gray-950';
        slideshowImage.innerHTML = '';
    } else {
        slideshowImage.className = `max-w-full h-[75vh] rounded-lg shadow-2xl ${colors[photo.category]} flex items-center justify-center`;
        slideshowImage.innerHTML = `<i class="fas ${icons[photo.category]} text-9xl ${photo.category === 'family' ? 'text-blue-500' : photo.category === 'prayer' ? 'text-green-500' : photo.category === 'food' ? 'text-amber-500' : photo.category === 'homecoming' ? 'text-purple-500' : photo.category === 'decorations' ? 'text-pink-500' : 'text-cyan-500'}" aria-hidden="true"></i>`;
    }

    // Update info
    document.getElementById('slideshow-title').textContent = photo.title;
    document.getElementById('slideshow-year').textContent = `Eid ${photo.year} • ${photo.category}`;
    document.getElementById('slideshow-counter').textContent = currentPhotoIndex + 1;
    document.getElementById('slideshow-total').textContent = visiblePhotos.length;

    // Update progress bar
    const progress = ((currentPhotoIndex + 1) / visiblePhotos.length) * 100;
    const slideshowProgress = document.getElementById('slideshow-progress');
    if (slideshowProgress) slideshowProgress.style.width = `${progress}%`;
}

async function addGreeting() {
    const nameInput = document.getElementById('greeting-name');
    const messageInput = document.getElementById('greeting-message');

    if (!nameInput || !messageInput) return;

    const name = nameInput.value.trim() || 'Anonymous';
    const message = messageInput.value.trim();

    if (!message) {
        showNotification('Please write a greeting or prayer message', 'error');
        return;
    }

    // Save to storage
    const success = await saveGreetingToStorage(name, message);

    if (success) {
        // Re-render greetings
        renderGreetings();

        // Clear inputs
        nameInput.value = '';
        messageInput.value = '';

        // Show success message
        showNotification('Your greeting has been shared!', 'success');
    } else {
        showNotification('Error saving greeting', 'error');
    }
}

// NEW: Toast functionality
function showDeleteToast(photoId, photoIndex, photoTitle) {
    photoToDelete = {
        id: photoId,
        index: photoIndex,
        title: photoTitle
    };

    // Update toast content
    toastTitle.textContent = 'Delete "' + photoTitle + '"?';
    toastMessage.textContent = `This action cannot be undone. The photo will be permanently removed from your memories.`;

    // Clear any existing timeout
    if (toastTimeout) {
        clearTimeout(toastTimeout);
    }

    // Show toast
    deleteToast.classList.remove('hide');
    deleteToast.classList.add('show');

    // Set timeout to auto-hide toast after 5 seconds
    toastTimeout = setTimeout(() => {
        hideDeleteToast();
        photoToDelete = null;
    }, 5000);
}

function hideDeleteToast() {
    deleteToast.classList.remove('show');
    deleteToast.classList.add('hide');

    // Clear timeout
    if (toastTimeout) {
        clearTimeout(toastTimeout);
        toastTimeout = null;
    }

    // Reset photo to delete
    photoToDelete = null;
}

async function confirmDeleteFromToast() {
    if (!photoToDelete) return;

    const { id, index, title } = photoToDelete;

    // Find any card with this ID (Photo, Video, or Story)
    const cardSelector = `.memory-card[data-id="${id}"]`;
    const card = document.querySelector(cardSelector);

    if (card) {
        // Add deleting animation class
        card.classList.add('deleting');

        // Wait for animation to complete
        setTimeout(async () => {
            // Delete from storage
            const success = await deleteMemoryFromStorage(id);

            if (success) {
                // Re-render everything to catch potential overlaps
                renderPhotos();
                renderVideos();
                renderStories();
                renderTimeline(); // RESTORED: Update timeline immediately

                // Show undo notification
                showUndoNotification(title);

                // Hide toast
                hideDeleteToast();
            } else {
                showNotification('Error deleting memory', 'error');
            }
        }, 500);
    }
}

function showUndoNotification(photoTitle) {
    // Clear any existing timeout
    if (undoTimeout) {
        clearTimeout(undoTimeout);
    }

    // Update notification text
    undoMessage.textContent = `"${photoTitle}" deleted`;

    // Show notification
    undoNotification.classList.add('show');

    // Set timeout to auto-hide notification after 5 seconds
    undoTimeout = setTimeout(() => {
        hideUndoNotification();
        // Clear undo data after timeout
        deletedPhoto = null;
        deletedPhotoIndex = -1;
    }, 5000);
}

function hideUndoNotification() {
    undoNotification.classList.remove('show');
}

async function undoDelete() {
    if (deletedPhoto) {
        const success = await undoPhotoDeletion();

        if (success) {
            showNotification('Photo restored successfully!', 'success');
            hideUndoNotification();

            // Clear timeout
            if (undoTimeout) {
                clearTimeout(undoTimeout);
                undoTimeout = null;
            }
        }
    } else {
        hideUndoNotification();
    }
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg text-white font-medium transform translate-x-full transition-transform duration-300 ${type === 'success' ? 'bg-green-600' : type === 'error' ? 'bg-red-600' : 'bg-amber-600'}`;
    notification.textContent = message;

    // Add icon
    const icon = document.createElement('i');
    icon.className = `fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'} mr-2`;
    notification.prepend(icon);

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function toggleMusic() {
    if (!backgroundMusic) return;

    if (musicPlaying) {
        backgroundMusic.pause();
    } else {
        backgroundMusic.play().catch(error => {
            console.error("Audio playback failed:", error);
            if (error.name === 'NotAllowedError') {
                showNotification("Mohon klik di mana saja pada halaman dulu sebelum musik bisa diputar.", "info");
            } else {
                showNotification("Gagal memutar musik.", "error");
            }
        });
    }
}