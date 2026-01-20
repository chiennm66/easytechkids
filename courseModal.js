// Course Modal Functionality
(function(){
    const modal = document.getElementById('course-modal');
    const closeBtn = document.getElementById('modal-close');
    const modalContent = document.getElementById('modal-course-content');

    // Mapping buttons to course IDs
    const courseMapping = {
        'Lập Trình Scratch (Kids)': 'scratch',
        'Pictoblox AI': 'pictoblox',
        'Lập Trình Python & AI': 'python',
        'Lập Trình Web (HTML, CSS, JS)': 'web',
        'ToolAI & Ứng dụng': 'toolai',
        'Luyện thi HKICO & THT': 'competition',
        'Kỹ Sư Robotics Nhí': 'robotics',
        'Thiết kế UI: Figma': 'figma',
        'Bootstrap 5': 'bootstrap',
        'Thiết kế nội dung: Canva': 'canva',
        'IC3 - Kỹ năng tin học cơ bản': 'ic3',
        'MOS - Microsoft Office': 'mos'
    };

    // Open modal with course details
    function openCourseModal(courseId) {
        if (!coursesData[courseId]) {
            console.error('Course not found:', courseId);
            return;
        }

        const course = coursesData[courseId];
        
        let contentHTML = `
            <div class="mb-4">
                <h2 class="text-3xl font-bold text-blue-900 mb-2">${course.title}</h2>
                <p class="text-orange-600 font-semibold">Độ tuổi: ${course.ageGroup}</p>
            </div>
            
            <div class="mb-6 p-4 bg-blue-50 rounded-lg">
                <p class="text-gray-700">${course.description}</p>
            </div>

            <div class="grid md:grid-cols-3 gap-4 mb-6">
                <div class="bg-gray-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-600 font-semibold">THỜI LƯỢNG/1 MODULE</p>
                    <p class="text-lg font-bold text-blue-900">${course.duration}</p>
                </div>
                <div class="bg-gray-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-600 font-semibold">LỊCH HỌC</p>
                    <p class="text-lg font-bold text-blue-900">${course.schedule}</p>
                </div>
                <div class="bg-gray-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-600 font-semibold">KẾT QUẢ ĐẠT ĐƯỢC</p>
                    <p class="text-sm font-bold text-orange-600">${course.outcomes[0]}</p>
                </div>
            </div>

            <div class="mb-6">
                <h3 class="text-xl font-bold text-blue-900 mb-3">Tổng Kết Quả Đạt Được:</h3>
                <div class="bg-gradient-to-r from-blue-50 to-orange-50 p-4 rounded-lg space-y-2">
        `;
        
        course.outcomes.forEach((outcome) => {
            contentHTML += `<div class="flex items-start"><span class="text-orange-500 font-bold mr-3 text-lg">✓</span><span class="text-gray-700">${outcome}</span></div>`;
        });

        contentHTML += `
                </div>
            </div>

            <div class="mb-6">
                <h3 class="text-xl font-bold text-blue-900 mb-4">Nội Dung Chi Tiết</h3>
                <div class="space-y-3" id="modules-list">
        `;
        
        course.modules.forEach((module, moduleIndex) => {
            const isOpen = moduleIndex === 0;
            contentHTML += `
                <div class="border-2 ${isOpen ? 'border-orange-500 bg-orange-50' : 'border-gray-200 bg-white'} rounded-lg overflow-hidden module-accordion">
                    <button class="module-toggle w-full px-4 py-3 flex justify-between items-center font-semibold text-left transition hover:bg-opacity-80" data-module="${moduleIndex}">
                        <div class="flex items-center gap-3">
                            <span class="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">Module ${moduleIndex + 1}</span>
                            <span class="text-blue-900">${module.title}</span>
                        </div>
                        <span class="module-icon text-2xl text-orange-500 font-bold transition-transform ${isOpen ? 'rotate-180' : ''}">${isOpen ? '▼' : '▶'}</span>
                    </button>
                    <div class="module-content ${isOpen ? '' : 'hidden'} px-4 py-3 bg-white border-t-2 border-gray-200">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            `;
            
            module.lessons.forEach((lesson, lessonIndex) => {
                contentHTML += `
                    <div class="flex items-start text-sm">
                        <span class="text-orange-500 font-bold mr-2">• </span>
                        <span class="text-gray-700">Bài ${lessonIndex + 1}: ${lesson}</span>
                    </div>
                `;
            });
            
            contentHTML += `
                        </div>
                    </div>
                </div>
            `;
        });

        contentHTML += `
                </div>
            </div>

            <div class="flex gap-4 pt-4 border-t">
                <button id="modal-learn-btn" class="flex-1 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition">HỌC THỬ NGAY</button>
                <button id="modal-consult-btn" class="flex-1 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">TƯ VẤN MIỄN PHÍ</button>
            </div>
        `;

        modalContent.innerHTML = contentHTML;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        // Module accordion functionality
        document.querySelectorAll('.module-toggle').forEach((button) => {
            button.addEventListener('click', () => {
                const accordion = button.closest('.module-accordion');
                const content = accordion.querySelector('.module-content');
                const icon = button.querySelector('.module-icon');
                
                // Toggle current module
                const isHidden = content.classList.contains('hidden');
                if (isHidden) {
                    content.classList.remove('hidden');
                    icon.classList.add('rotate-180');
                    accordion.classList.add('border-orange-500', 'bg-orange-50');
                    accordion.classList.remove('border-gray-200', 'bg-white');
                } else {
                    content.classList.add('hidden');
                    icon.classList.remove('rotate-180');
                    accordion.classList.remove('border-orange-500', 'bg-orange-50');
                    accordion.classList.add('border-gray-200', 'bg-white');
                }
            });
        });

        // Button functionality
        document.getElementById('modal-learn-btn').addEventListener('click', () => {
            alert(`Cảm ơn bạn quan tâm! Vui lòng liên hệ qua email hoặc Hotline để đăng ký học thử.`);
            closeCourseModal();
        });

        document.getElementById('modal-consult-btn').addEventListener('click', () => {
            const contactSection = document.getElementById('contact');
            closeCourseModal();
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Close modal
    function closeCourseModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

    // Add click handlers to all course detail buttons
    document.addEventListener('click', (e) => {
        const isDetailButton = e.target.tagName === 'A' && e.target.textContent.trim() === 'XEM CHI TIẾT';
        if (isDetailButton) {
            e.preventDefault();
            const parent = e.target.closest('.bg-white.border.rounded-2xl');
            if (parent) {
                const titleElement = parent.querySelector('h3');
                if (titleElement) {
                    const courseTitle = titleElement.textContent.trim();
                    const courseId = courseMapping[courseTitle];
                    if (courseId) {
                        openCourseModal(courseId);
                    } else {
                        console.error('Course not found for title:', courseTitle);
                    }
                }
            }
        }
    });

    // Close modal on close button click
    closeBtn && closeBtn.addEventListener('click', closeCourseModal);

    // Close modal on outside click
    modal && modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeCourseModal();
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeCourseModal();
        }
    });
})();
