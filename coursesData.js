// Course Details Data
const coursesData = {
    'scratch': {
        title: 'Lập Trình Scratch (Kids)',
        ageGroup: '7 - 11 tuổi',
        description: 'Khóa học lập trình kéo-thả cho trẻ em, phát triển tư duy logic thông qua các dự án game và hoạt hình interactiv.',
        duration: '12 tuần',
        schedule: '1 buổi/tuần, 90 phút/buổi',
        contact: 'Liên hệ học thử',
        outcomes: [
            'Hiểu biết sâu về lập trình kéo-thả',
            'Có khả năng tạo game và hoạt hình độc lập',
            'Phát triển tư duy logic và giải quyết vấn đề',
            'Tự tin tham gia các cuộc thi Scratch quốc tế',
            'Nền tảng vững để học lập trình chuyên sâu'
        ],
        modules: [
            {
                title: 'Module 1: Nhập môn Scratch',
                lessons: [
                    'Giới thiệu Scratch và cộng đồng',
                    'Giao diện Scratch và các thành phần cơ bản',
                    'Khối lệnh di chuyển và hướng',
                    'Khối lệnh âm thanh và hình dáng',
                    'Biến và kiểu dữ liệu cơ bản',
                    'Điều kiện: If - Else',
                    'Vòng lặp: Repeat',
                    'Vòng lặp: Forever',
                    'Sử dụng Operators: Toán tử',
                    'Sự kiện và xử lý sự kiện',
                    'Dự án: Tạo nhân vật chuyển động',
                    'Dự án: Trò chơi bắt vật thể'
                ]
            },
            {
                title: 'Module 2: Tương tác và Logic',
                lessons: [
                    'Xử lý phím bấm và chuột',
                    'Biến nâng cao: Local và Global',
                    'Danh sách (List) cơ bản',
                    'Thêm, xóa, sửa danh sách',
                    'Logic AND, OR, NOT',
                    'Vòng lặp For',
                    'Hàm (Functions) cơ bản',
                    'Tạo Custom Blocks',
                    'Xử lý lỗi và Debug',
                    'Tối ưu hóa mã nguồn',
                    'Dự án: Game đập chuột',
                    'Dự án: Truyện tương tác'
                ]
            },
            {
                title: 'Module 3: Dự án và Sáng tạo',
                lessons: [
                    'Nhân vật, cảnh quay, hiệu ứng âm thanh',
                    'Thiết kế giao diện người dùng',
                    'Quản lý điểm số và mức độ',
                    'Tạo menu chính và kết thúc game',
                    'Animation: Chuyển động mượt mà',
                    'Hiệu ứng đặc biệt và chuyển cảnh',
                    'Xử lý va chạm trong game',
                    'Lưu trữ dữ liệu đơn giản',
                    'Tìm hiểu về thuật toán cơ bản',
                    'Tối ưu hiệu năng game',
                    'Dự án: Tạo game hoàn chỉnh',
                    'Chia sẻ tác phẩm trên cộng đồng'
                ]
            },
            {
                title: 'Module 4: Nâng cao và Tích hợp',
                lessons: [
                    'Kết nối Scratch với Arduino cơ bản',
                    'Sử dụng Scratch Extensions',
                    'Tích hợp AI: Nhận diện hình ảnh',
                    'Tích hợp AI: Nhận diện giọng nói',
                    'Tạo ứng dụng có cơ sở dữ liệu',
                    'Phân tích và cải thiện game',
                    'Tạo hoạt hình 3D cơ bản',
                    'Dự án nhóm: Phân công công việc',
                    'Làm việc với dự án lớn',
                    'Thuyết trình và giới thiệu dự án',
                    'Dự án tổng hợp: Game phức tạp',
                    'Đánh giá và hoàn thiện sản phẩm'
                ]
            }
        ]
    },
    'pictoblox': {
        title: 'Pictoblox AI',
        ageGroup: 'Từ 10 tuổi trở lên',
        description: 'Lập trình AI trực quan với giao diện kéo-thả tích hợp các công nghệ AI hiện đại.',
        duration: '12 tuần',
        schedule: '1 buổi/tuần, 90 phút/buổi',
        contact: 'Liên hệ học thử',
        outcomes: [
            'Nắm vững khái niệm AI và Machine Learning cơ bản',
            'Xây dựng các ứng dụng AI thực tế: nhận diện ảnh, giọng nói',
            'Điều khiển robot bằng AI',
            'Tư duy hệ thống và phân tích dữ liệu',
            'Chuẩn bị tốt cho các lĩnh vực AI/ML trong tương lai'
        ],
        modules: [
            {
                title: 'Module 1: Nhập môn Pictoblox',
                lessons: [
                    'Giới thiệu Pictoblox và AI',
                    'Cài đặt và sử dụng Pictoblox',
                    'Giao diện Pictoblox cơ bản',
                    'Các khối lệnh cơ bản',
                    'Biến và dữ liệu',
                    'Điều kiện If-Else',
                    'Vòng lặp',
                    'Sự kiện và xử lý sự kiện',
                    'Khối lệnh di chuyển',
                    'Khối lệnh hiển thị và âm thanh',
                    'Dự án: Ứng dụng chào hỏi',
                    'Dự án: Game đơn giản với AI'
                ]
            },
            {
                title: 'Module 2: AI - Nhận diện Hình ảnh',
                lessons: [
                    'Giới thiệu Computer Vision',
                    'Khối lệnh nhận diện vật thể',
                    'Sử dụng webcam của máy tính',
                    'Nhận diện khuôn mặt',
                    'Nhận diện cử chỉ tay',
                    'Nhận diện màu sắc',
                    'Xử lý dữ liệu hình ảnh',
                    'Điều chỉnh độ chính xác',
                    'Kết hợp logic với nhận diện ảnh',
                    'Debug và kiểm tra',
                    'Dự án: Ứng dụng điều khiển cử chỉ',
                    'Dự án: Game tương tác với ảnh'
                ]
            },
            {
                title: 'Module 3: AI - Xử lý Âm thanh & NLP',
                lessons: [
                    'Giới thiệu xử lý âm thanh',
                    'Nhận diện âm thanh cơ bản',
                    'Xử lý ngôn ngữ tự nhiên (NLP)',
                    'Nhận diện lệnh bằng giọng nói',
                    'Tính cảm xúc từ text',
                    'Trích xuất thông tin từ văn bản',
                    'Kết hợp voice và vision',
                    'Tạo chatbot đơn giản',
                    'Phản hồi động dựa trên input',
                    'Lưu trữ và xử lý dữ liệu',
                    'Dự án: Trợ lý ảo cơ bản',
                    'Dự án: Ứng dụng ghi chú bằng giọng nói'
                ]
            },
            {
                title: 'Module 4: Dự án Tích hợp AI',
                lessons: [
                    'Kết nối với Robot và cảm biến',
                    'Điều khiển robot bằng AI',
                    'Tích hợp multiple AI models',
                    'Tối ưu hóa hiệu năng',
                    'Xử lý lỗi và exception',
                    'Tạo giao diện người dùng',
                    'Lưu dữ liệu vào database',
                    'Phân tích dữ liệu thu được',
                    'Deploy ứng dụng',
                    'Thử nghiệm và cải thiện',
                    'Dự án: Hệ thống AI hoàn chỉnh',
                    'Trình bày và demo sản phẩm'
                ]
            }
        ]
    },
    'python': {
        title: 'Lập Trình Python & AI',
        ageGroup: '12 - 18 tuổi',
        description: 'Khóa học Python từ cơ bản đến nâng cao, với ứng dụng AI và phát triển web.',
        duration: '12 tuần',
        schedule: '1 buổi/tuần, 90 phút/buổi',
        contact: 'Liên hệ học thử',
        outcomes: [
            'Thành thạo lập trình Python chuyên nghiệp',
            'Xây dựng ứng dụng web backend với Django',
            'Hiểu biết Machine Learning và xây dựng model',
            'Xử lý dữ liệu lớn với Pandas và NumPy',
            'Cơ hội việc làm trong lĩnh vực Python Developer'
        ],
        modules: [
            {
                title: 'Module 1: Python Cơ bản',
                lessons: [
                    'Cài đặt Python và PyCharm',
                    'Syntax cơ bản và Print',
                    'Biến và kiểu dữ liệu',
                    'Toán tử: Toán học, so sánh, logic',
                    'Input và xử lý dữ liệu',
                    'String: tạo, cắt, nối chuỗi',
                    'Điều kiện If-Elif-Else',
                    'Vòng lặp While',
                    'Vòng lặp For',
                    'Break và Continue',
                    'Dự án: Máy tính cơ bản',
                    'Dự án: Trò chơi đoán số'
                ]
            },
            {
                title: 'Module 2: Hàm và Cấu trúc Dữ liệu',
                lessons: [
                    'Định nghĩa và gọi hàm',
                    'Tham số và giá trị trả về',
                    'Scope: Global và Local',
                    'List: tạo, truy cập, sửa',
                    'Tuple và Set',
                    'Dictionary: Key-Value',
                    'Phương thức của List, String, Dict',
                    'List Comprehension',
                    'Lambda và Anonymous Functions',
                    'Xử lý lỗi: Try-Except',
                    'Dự án: Quản lý danh sách học sinh',
                    'Dự án: Ứng dụng To-do list'
                ]
            },
            {
                title: 'Module 3: File, Module và OOP',
                lessons: [
                    'Đọc và ghi file (Read, Write)',
                    'Xử lý JSON và CSV',
                    'Import module và library',
                    'Sử dụng thư viện ngoài',
                    'Object-Oriented Programming (OOP)',
                    'Class và Object',
                    'Attributes và Methods',
                    'Inheritance (Thừa kế)',
                    'Polymorphism',
                    'Encapsulation',
                    'Dự án: Hệ thống quản lý học sinh',
                    'Dự án: Ứng dụng quản lý tiền bán hàng'
                ]
            },
            {
                title: 'Module 4: Machine Learning & Web',
                lessons: [
                    'NumPy: Tính toán khoa học',
                    'Pandas: Xử lý dữ liệu',
                    'Matplotlib: Vẽ biểu đồ',
                    'Scikit-learn: Cơ bản ML',
                    'Classification: Phân loại',
                    'Regression: Dự đoán',
                    'Clustering: Phân nhóm',
                    'Django Framework: Cơ bản',
                    'Tạo Web App đơn giản',
                    'Deploy Web App',
                    'Dự án: Phân tích dữ liệu thực tế',
                    'Dự án: Web App với AI integration'
                ]
            }
        ]
    },
    'web': {
        title: 'Lập Trình Web (HTML, CSS, JS)',
        ageGroup: 'Từ 12 tuổi trở lên',
        description: 'Xây dựng các trang web responsive từ cơ bản đến nâng cao với HTML, CSS và JavaScript.',
        duration: '12 tuần',
        schedule: '1 buổi/tuần, 90 phút/buổi',
        contact: 'Liên hệ học thử',
        outcomes: [
            'Xây dựng website responsive và hiện đại',
            'Thành thạo HTML5, CSS3 và JavaScript ES6+',
            'Tạo giao diện user-friendly và SEO-friendly',
            'Sử dụng API và fetch dữ liệu từ server',
            'Công việc Freelance Web Developer hoặc Frontend Developer'
        ],
        modules: [
            {
                title: 'Module 1: HTML & CSS Cơ bản',
                lessons: [
                    'Cài đặt Code Editor (VS Code)',
                    'Cấu trúc HTML cơ bản',
                    'Thẻ HTML: heading, paragraph, link',
                    'Danh sách: ul, ol, li',
                    'Form và input',
                    'Hình ảnh và media',
                    'CSS: Selector và Properties',
                    'Box Model: Margin, Padding, Border',
                    'Màu sắc và kiểu chữ',
                    'Định vị: Position, Float',
                    'Dự án: Tạo trang web cơ bản',
                    'Dự án: Portfolio cá nhân đơn giản'
                ]
            },
            {
                title: 'Module 2: Flexbox, Grid & Responsive',
                lessons: [
                    'Flexbox: Layout linh hoạt',
                    'Flexbox properties chi tiết',
                    'CSS Grid: Layout lưới',
                    'Grid: Areas và Named lines',
                    'Media Queries cơ bản',
                    'Mobile-first design',
                    'Responsive Typography',
                    'Responsive Images',
                    'Viewport và Meta tags',
                    'Testing trên nhiều màn hình',
                    'Dự án: Website responsive hoàn chỉnh',
                    'Dự án: Landing page chuyên nghiệp'
                ]
            },
            {
                title: 'Module 3: JavaScript Cơ bản',
                lessons: [
                    'Cú pháp JavaScript cơ bản',
                    'Biến: var, let, const',
                    'Kiểu dữ liệu: String, Number, Boolean',
                    'Toán tử và biểu thức',
                    'Điều kiện If-Else-Switch',
                    'Vòng lặp: For, While, Do-While',
                    'Function: Định nghĩa và gọi',
                    'Array: Tạo, truy cập, phương thức',
                    'Object: Tạo và truy cập',
                    'Scope và Hoisting',
                    'Dự án: Interactive calculator',
                    'Dự án: Todo list app'
                ]
            },
            {
                title: 'Module 4: DOM & Events',
                lessons: [
                    'DOM: Truy cập elements',
                    'querySelector vs getElementById',
                    'Thay đổi content: innerHTML, textContent',
                    'Thay đổi CSS: className, style',
                    'Tạo và xóa elements',
                    'Event handling: Click, Input, Change',
                    'Event delegation',
                    'Form validation',
                    'Local Storage: Lưu dữ liệu',
                    'Fetch API: Lấy dữ liệu',
                    'Dự án: Weather app (API)',
                    'Dự án: E-commerce product page'
                ]
            }
        ]
    },
    'toolai': {
        title: 'ToolAI & Ứng dụng',
        ageGroup: 'Từ 10 tuổi trở lên',
        description: 'Khai thác các công cụ AI hiện đại để hỗ trợ học tập, sáng tạo và giải quyết vấn đề thực tế.',
        duration: '12 tuần',
        schedule: '1 buổi/tuần, 90 phút/buổi',
        contact: 'Liên hệ học thử',
        outcomes: [
            'Sử dụng thành thạo các công cụ AI phổ biến',
            'Viết Prompt Engineering hiệu quả',
            'Tạo nội dung chất lượng cao bằng AI',
            'Tư duy phê phán về AI và etiquette',
            'Ứng dụng AI vào học tập và công việc hàng ngày'
        ],
        modules: [
            {
                title: 'Module 1: AI Text Generation',
                lessons: [
                    'Giới thiệu Generative AI',
                    'ChatGPT: Đăng ký và sử dụng cơ bản',
                    'Prompt Engineering: Cơ bản',
                    'Viết prompt hiệu quả',
                    'Các prompting techniques: Few-shot, Chain-of-thought',
                    'Claude và Gemini: So sánh',
                    'Tạo nội dung: Blog, Email, Tiểu thuyết',
                    'Dịch và tóm tắt văn bản',
                    'Sáng tạo ý tưởng với AI',
                    'Phân tích dữ liệu bằng AI',
                    'Dự án: Tạo blog post',
                    'Dự án: Content marketing assistant'
                ]
            },
            {
                title: 'Module 2: AI Image Generation',
                lessons: [
                    'Giới thiệu Image Generation AI',
                    'Midjourney: Đăng ký và Discord setup',
                    'Các lệnh Midjourney cơ bản',
                    'Viết prompts cho hình ảnh',
                    'DALL-E: OpenAI image generator',
                    'Stable Diffusion và WebUI',
                    'Editing và upscaling hình ảnh',
                    'Style và aesthetic exploration',
                    'Tạo character design',
                    'Tạo poster và marketing materials',
                    'Dự án: Tạo concept art',
                    'Dự án: Thiết kế visual cho sản phẩm'
                ]
            },
            {
                title: 'Module 3: Productivity & Learning Tools',
                lessons: [
                    'Notion AI: Note-taking và organization',
                    'Grammarly: Kiểm tra ngữ pháp',
                    'Otter.ai: Transcription tự động',
                    'Quillbot: Paraphrase tool',
                    'Perplexity: AI search engine',
                    'GitHub Copilot: Code assistant',
                    'Google Bard: Research assistant',
                    'AI tools cho học tập',
                    'AI tools cho creative work',
                    'Quản lý và tổ chức AI tools',
                    'Dự án: Thiết lập workflow AI',
                    'Dự án: Tạo learning system với AI'
                ]
            },
            {
                title: 'Module 4: Tư duy Phê phán & Ứng dụng',
                lessons: [
                    'Giới hạn của AI hiện tại',
                    'Bias và fairness trong AI',
                    'Hallucinations và sai lầm',
                    'Đạo đức sử dụng AI',
                    'Tác động của AI đến xã hội',
                    'Privacy và security',
                    'Học hành chân thật với AI',
                    'Sử dụng AI không gian lận',
                    'Combine multiple AI tools',
                    'Tối ưu workflow sử dụng AI',
                    'Dự án: Tạo AI-powered project',
                    'Dự án: Problem solving với AI hỗ trợ'
                ]
            }
        ]
    },
    'competition': {
        title: 'Luyện thi HKICO & THT',
        ageGroup: 'Từ 12 tuổi trở lên',
        description: 'Chuẩn bị thi các cuộc thi lập trình quốc tế: HKICO, THT và các kỳ thi khác.',
        duration: '12 tuần',
        schedule: '1 buổi/tuần, 90 phút/buổi',
        contact: 'Liên hệ học thử',
        outcomes: [
            'Nắm vững thuật toán và cấu trúc dữ liệu nâng cao',
            'Giải quyết bài toán cạnh tranh một cách tối ưu',
            'Đạt kết quả cao tại các cuộc thi HKICO, THT',
            'Xây dựng nền tảng cho học AI/ML/Competitive Programming',
            'Cơ hội tuyển sinh và học bổng ĐH'
        ],
        modules: [
            {
                title: 'Module 1: Thuật toán & Cấu trúc Dữ liệu',
                lessons: [
                    'Độ phức tạp thuật toán: Big O notation',
                    'Tìm kiếm: Linear Search, Binary Search',
                    'Sắp xếp: Bubble, Selection, Insertion',
                    'Sắp xếp nâng cao: Merge Sort, Quick Sort',
                    'Stack và Queue',
                    'Linked List',
                    'Tree cơ bản: Binary Tree, BST',
                    'Graph cơ bản: DFS, BFS',
                    'Hash Table',
                    'Heap',
                    'Dự án: Tối ưu thuật toán',
                    'Dự án: Xây dựng data structure từ đầu'
                ]
            },
            {
                title: 'Module 2: Kỹ thuật Lập trình Cạnh tranh',
                lessons: [
                    'Quy hoạch động: Fibonacci, Coin change',
                    'Quy hoạch động: Knapsack, LCS',
                    'Greedy: Activity selection, Huffman',
                    'Backtracking: N-Queens, Sudoku',
                    'Divide and Conquer',
                    'Two Pointers technique',
                    'Sliding Window',
                    'Bitmask techniques',
                    'Number theory cơ bản',
                    'Modular arithmetic',
                    'Dự án: Giải quyết các bài toán cạnh tranh',
                    'Dự án: Optimize solution'
                ]
            },
            {
                title: 'Module 3: Luyện đề HKICO & THT',
                lessons: [
                    'Làm quen cấu trúc đề thi',
                    'Luyện đề HKICO năm trước',
                    'Luyện đề HKICO năm ngoái',
                    'Luyện đề HKICO 2 năm trước',
                    'Luyện đề THT năm trước',
                    'Luyện đề THT năm ngoái',
                    'Phân tích lỗi sai',
                    'Chiến lược phân bổ thời gian',
                    'Kinh nghiệm từ những bạn thi thành công',
                    'Mock test: Thi thử giống thật',
                    'Dự án: Complete past paper collection',
                    'Dự án: Time management practice'
                ]
            },
            {
                title: 'Module 4: Chuẩn bị thi & Toán học',
                lessons: [
                    'Toán học rời rạc cơ bản',
                    'Tổ hợp và xác suất',
                    'Graph theory nâng cao',
                    'Network flow cơ bản',
                    'Geometry computational',
                    'String matching: KMP, Z-algorithm',
                    'Advanced DP: Digit DP, Tree DP',
                    'Chuẩn bị tâm lý thi cử',
                    'Health và sleep schedule',
                    'Last-minute review techniques',
                    'Dự án: Comprehensive revision',
                    'Dự án: Final mock test & evaluation'
                ]
            }
        ]
    },
    'robotics': {
        title: 'Kỹ Sư Robotics Nhí',
        ageGroup: 'Từ 10 tuổi trở lên',
        description: 'Lắp ráp và lập trình robot thực tế, phát triển kỹ năng cơ khí và điện tử cơ bản.',
        duration: '12 tuần',
        schedule: '1 buổi/tuần, 90 phút/buổi',
        contact: 'Liên hệ học thử',
        outcomes: [
            'Hiểu biết sâu về cơ khí, điện tử cơ bản',
            'Lắp ráp và điều khiển robot độc lập',
            'Lập trình Arduino và Micro:bit',
            'Tham gia cuộc thi STEM quốc tế',
            'Nền tảng cho kỹ sư robotic chuyên nghiệp'
        ],
        modules: [
            {
                title: 'Module 1: Nhập môn Robotics',
                lessons: [
                    'Giới thiệu Robotics và ứng dụng',
                    'Cơ khí cơ bản: bánh, trục, đòn bẩy',
                    'Giới thiệu Arduino và Micro:bit',
                    'Cấu trúc mạch điện cơ bản',
                    'Các loại cảm biến: Ánh sáng, khoảng cách',
                    'Motor và servo: Điều khiển chuyển động',
                    'Breadboard và dây nối',
                    'Lập trình Arduino cơ bản',
                    'LED và buzzer: Output devices',
                    'Hello World trên Arduino',
                    'Dự án: LED blink đầu tiên',
                    'Dự án: Nút bấm điều khiển LED'
                ]
            },
            {
                title: 'Module 2: Cảm biến và Điều khiển',
                lessons: [
                    'Analog vs Digital sensors',
                    'Cảm biến khoảng cách siêu âm',
                    'Cảm biến ánh sáng LDR',
                    'Cảm biến nhiệt độ DHT',
                    'Cảm biến chuyển động PIR',
                    'ADC: Chuyển đổi tín hiệu',
                    'Điều khiển motor DC',
                    'Điều khiển servo 180 độ',
                    'PWM: Điều khiển tốc độ',
                    'Đọc dữ liệu từ cảm biến',
                    'Dự án: Robot tránh vật cản',
                    'Dự án: Robot theo dõi ánh sáng'
                ]
            },
            {
                title: 'Module 3: Robot Di động',
                lessons: [
                    'Thiết kế khung xe robot',
                    'Lắp ráp động cơ và bánh xe',
                    'Hệ thống pin và sạc',
                    'Cân bằng trọng lượng',
                    'Lập trình chuyển động: Thẳng, quay',
                    'Điều khiển tốc độ và hướng',
                    'Lập trình tránh vật cản',
                    'Line following robot cơ bản',
                    'Đội hình di chuyển',
                    'Xử lý lỗi cơ học',
                    'Dự án: Robot chạy đơn giản',
                    'Dự án: Robot tránh chướng ngại vật'
                ]
            },
            {
                title: 'Module 4: Dự án Nâng cao',
                lessons: [
                    'Kết hợp nhiều cảm biến',
                    'Giao tiếp wireless: Bluetooth, RF',
                    'Điều khiển robot từ điện thoại',
                    'Robot cánh tay cơ bản',
                    'Bắt và di chuyển vật thể',
                    'Lập trình tự động',
                    'Cảm biến gyroscope và accelerometer',
                    'Điều hướng bằng GPS',
                    'Xây dựng cảm biến tùy chỉnh',
                    'Tối ưu hóa mã nguồn',
                    'Dự án tổng hợp: Robot hoàn chỉnh',
                    'Chuẩn bị cho cuộc thi STEM'
                ]
            }
        ]
    },
    'figma': {
        title: 'Thiết kế UI: Figma',
        ageGroup: 'Từ 12 tuổi trở lên',
        description: 'Học thiết kế giao diện người dùng chuyên nghiệp với Figma, từ wireframe đến prototype tương tác.',
        duration: '12 tuần',
        schedule: '1 buổi/tuần, 90 phút/buổi',
        contact: 'Liên hệ học thử',
        outcomes: [
            'Thành thạo Figma và các tính năng thiết kế',
            'Thiết kế UI/UX chuyên nghiệp',
            'Tạo wireframe và prototype tương tác',
            'Cộng tác nhóm thiết kế hiệu quả',
            'Portfolio thiết kế cho công việc freelance'
        ],
        modules: [
            {
                title: 'Module 1: Giới thiệu Figma',
                lessons: [
                    'Tạo tài khoản Figma',
                    'Giao diện Figma cơ bản',
                    'Workspace, File và Project',
                    'Canvas: Vẽ trên trang làm việc',
                    'Các shape cơ bản: Rectangle, Circle, Line',
                    'Pen tool: Vẽ tự do',
                    'Text: Thêm và chỉnh sửa chữ',
                    'Nhóm object với Frame',
                    'Lớp (Layers) và tổ chức',
                    'Giới thiệu màu sắc và stroke',
                    'Dự án: Logo đơn giản',
                    'Dự án: Business card design'
                ]
            },
            {
                title: 'Module 2: Styling và Component',
                lessons: [
                    'Fill: Màu sắc nền',
                    'Stroke: Đường viền',
                    'Shadow: Bóng đổ',
                    'Blur: Làm mờ hiệu ứng',
                    'Gradient: Màu chuyển',
                    'Tạo Colors và Styles',
                    'Typography: Kiểu chữ',
                    'Component cơ bản',
                    'Instance và variant',
                    'Design system thực tế',
                    'Dự án: Design system nhỏ',
                    'Dự án: UI kit button'
                ]
            },
            {
                title: 'Module 3: Wireframe và Layout',
                lessons: [
                    'UX basics: User journey',
                    'Wireframe là gì',
                    'Wireframe low-fidelity',
                    'Wireframe high-fidelity',
                    'Grid layout: 8px, 12px grid',
                    'Alignment và distribution',
                    'Auto layout: Responsive design',
                    'Constraints: Fixed vs Flexible',
                    'Mockup vs Wireframe',
                    'Mobile vs Desktop design',
                    'Dự án: App wireframe',
                    'Dự án: Website layout'
                ]
            },
            {
                title: 'Module 4: Prototype và Cộng tác',
                lessons: [
                    'Prototype là gì',
                    'Tạo interactions cơ bản',
                    'Navigation prototype',
                    'Animation trong prototype',
                    'Trigger và action',
                    'Delay và easing',
                    'Chia sẻ prototype link',
                    'Comment và feedback',
                    'Version history',
                    'Plugin Figma hữu ích',
                    'Dự án: App prototype đầy đủ',
                    'Chuẩn bị portfolio thiết kế'
                ]
            }
        ]
    },
    'bootstrap': {
        title: 'Bootstrap 5',
        ageGroup: 'Từ 12 tuổi trở lên',
        description: 'Xây dựng website responsive nhanh chóng với Bootstrap, thư viện CSS/JS phổ biến nhất.',
        duration: '12 tuần',
        schedule: '1 buổi/tuần, 90 phút/buổi',
        contact: 'Liên hệ học thử',
        outcomes: [
            'Thành thạo Bootstrap 5 framework',
            'Xây dựng website responsive nhanh',
            'Tính năng grid system và component',
            'Tùy chỉnh Bootstrap theme',
            'Phát triển website production-ready'
        ],
        modules: [
            {
                title: 'Module 1: Bootstrap Cơ bản',
                lessons: [
                    'Giới thiệu Bootstrap 5',
                    'CDN vs Download',
                    'Starter template',
                    'Viewport và meta tags',
                    'Reboot: CSS reset',
                    'Color utilities',
                    'Spacing: Margin và Padding',
                    'Typography cơ bản',
                    'Colors và variables',
                    'Display utilities',
                    'Dự án: Simple page với Bootstrap',
                    'Dự án: Color palette setup'
                ]
            },
            {
                title: 'Module 2: Grid System',
                lessons: [
                    'Grid 12-column system',
                    'Container, Row, Col',
                    'Responsive breakpoints',
                    'xs, sm, md, lg, xl, xxl',
                    'Nesting columns',
                    'Alignment: justify-content',
                    'Alignment: align-items',
                    'Gap: Khoảng cách giữa column',
                    'Gutters: Padding giữa column',
                    'Offsetting columns',
                    'Dự án: Responsive layout',
                    'Dự án: Multi-column article'
                ]
            },
            {
                title: 'Module 3: Component',
                lessons: [
                    'Button: Style và size',
                    'Button group',
                    'Form input và control',
                    'Form validation',
                    'Select, checkbox, radio',
                    'Navigation: Navbar',
                    'Breadcrumb',
                    'Pagination',
                    'Card component',
                    'Modal dialog',
                    'Dự án: Form submission',
                    'Dự án: Gallery với card'
                ]
            },
            {
                title: 'Module 4: Advanced & Customization',
                lessons: [
                    'Carousel/Slider',
                    'Dropdown menu',
                    'Accordion',
                    'Tabs navigation',
                    'Tooltip và Popover',
                    'Alert message',
                    'Badge và Label',
                    'Customize Bootstrap: SCSS',
                    'Variables: Primary color, spacing',
                    'Create custom theme',
                    'Dự án: Complete website template',
                    'Deploy Bootstrap website'
                ]
            }
        ]
    },
    'canva': {
        title: 'Thiết kế nội dung: Canva',
        ageGroup: 'Từ 10 tuổi trở lên',
        description: 'Tạo nội dung trực quan chuyên nghiệp nhanh chóng với Canva, không cần kỹ năng thiết kế.',
        duration: '12 tuần',
        schedule: '1 buổi/tuần, 90 phút/buổi',
        contact: 'Liên hệ học thử',
        outcomes: [
            'Sử dụng Canva để tạo nội dung chuyên nghiệp',
            'Thiết kế poster, slide, infographic',
            'Tạo branding consistent',
            'Sản xuất nội dung marketing hiệu quả',
            'Kiếm tiền qua freelance design'
        ],
        modules: [
            {
                title: 'Module 1: Giới thiệu Canva',
                lessons: [
                    'Đăng ký tài khoản Canva',
                    'Giao diện Canva cơ bản',
                    'Các loại template',
                    'Tạo design mới',
                    'Kích thước design khác nhau',
                    'Thêm hình ảnh từ library',
                    'Upload hình ảnh cá nhân',
                    'Text: Thêm và chỉnh sửa',
                    'Font: Chọn kiểu chữ',
                    'Màu sắc cơ bản',
                    'Dự án: Social media post',
                    'Dự án: Simple poster'
                ]
            },
            {
                title: 'Module 2: Design Elements',
                lessons: [
                    'Background: Solid, gradient, image',
                    'Element: Shape, line, icon',
                    'Frame: Group layout',
                    'Grids: Hỗ trợ alignment',
                    'Magic Edit: AI resizing',
                    'Brand Kit: Màu sắc logo',
                    'Upload custom logo',
                    'Font pairing: Kết hợp kiểu chữ',
                    'Color palette: Chọn màu',
                    'Transparency: Độ trong suốt',
                    'Dự án: Brand materials',
                    'Dự án: Professional flyer'
                ]
            },
            {
                title: 'Module 3: Content Marketing',
                lessons: [
                    'Infographic templates',
                    'Data visualization',
                    'Chart: Pie, bar, line',
                    'Timeline design',
                    'Before-After comparison',
                    'Quote graphics',
                    'Mockup: Phone, laptop',
                    'Product showcase',
                    'Video: Create short video',
                    'Animation: Thêm hiệu ứng chuyển động',
                    'Dự án: Infographic series',
                    'Dự án: Marketing campaign'
                ]
            },
            {
                title: 'Module 4: Publish và Business',
                lessons: [
                    'Download design: PNG, PDF, MP4',
                    'Print settings: Bleed, safe margin',
                    'Social media scheduling',
                    'Share link: Collaboration',
                    'Comment: Nhận feedback',
                    'Publish to Canva Create',
                    'Resize for all platform',
                    'Batch resize: Một lần nhiều kích thước',
                    'Templates: Tạo template riêng',
                    'Sell design: Kiếm tiền',
                    'Dự án: Complete brand package',
                    'Dự án: Portfolio ready'
                ]
            }
        ]
    },
    'ic3': {
        title: 'IC3 - Kỹ năng tin học cơ bản',
        ageGroup: 'Từ 12 tuổi trở lên',
        description: 'Chuẩn bị chứng chỉ tin học quốc tế IC3, bao gồm kỹ năng computing, internet, và security.',
        duration: '12 tuần',
        schedule: '1 buổi/tuần, 90 phút/buổi',
        contact: 'Liên hệ học thử',
        outcomes: [
            'Nắm vững kỹ năng tin học cơ bản',
            'Đạt chứng chỉ IC3 quốc tế',
            'Hiểu biết về internet an toàn',
            'Sử dụng ứng dụng văn phòng chuyên nghiệp',
            'Cơ hội việc làm văn phòng'
        ],
        modules: [
            {
                title: 'Module 1: Computing Fundamentals',
                lessons: [
                    'Hardware: CPU, RAM, Storage',
                    'Operating System: Windows, Mac, Linux',
                    'File system: Folder, file organization',
                    'Device manager',
                    'System settings',
                    'User account',
                    'Control panel cơ bản',
                    'Task manager',
                    'System performance',
                    'Backup và restore',
                    'Dự án: System optimization',
                    'Dự án: File management practice'
                ]
            },
            {
                title: 'Module 2: Key Applications',
                lessons: [
                    'MS Word cơ bản',
                    'Formatting: Font, paragraph, list',
                    'Table: Tạo và chỉnh sửa',
                    'MS Excel cơ bản',
                    'Formula: SUM, AVERAGE, COUNT',
                    'Chart: Tạo biểu đồ',
                    'MS PowerPoint cơ bản',
                    'Slide design',
                    'Animation và transition',
                    'Presenter view',
                    'Dự án: Word document',
                    'Dự án: Excel spreadsheet'
                ]
            },
            {
                title: 'Module 3: Internet and Security',
                lessons: [
                    'Internet cơ bản: HTTP, URL',
                    'Browser: Chrome, Firefox',
                    'Search: Google search tricks',
                    'Email: Gmail cơ bản',
                    'Attachment: Gửi file',
                    'Password security',
                    'Phishing: Nhận biết email giả',
                    'Malware: Virus, spyware',
                    'Antivirus: Bảo vệ máy',
                    'Firewall',
                    'Dự án: Email etiquette',
                    'Dự án: Security awareness'
                ]
            },
            {
                title: 'Module 4: Luyện thi IC3',
                lessons: [
                    'Cấu trúc đề thi IC3',
                    'Practice test 1: Computing',
                    'Practice test 2: Key Applications',
                    'Practice test 3: Internet',
                    'Time management',
                    'Question types: Multiple choice',
                    'Simulation: Practical tasks',
                    'Review weak areas',
                    'Mock exam 1',
                    'Mock exam 2',
                    'Dự án: Full practice exam',
                    'Chuẩn bị thi chính thức'
                ]
            }
        ]
    },
    'mos': {
        title: 'MOS - Microsoft Office',
        ageGroup: 'Từ 12 tuổi trở lên',
        description: 'Chứng chỉ MOS chuyên sâu: thành thạo Word, Excel, PowerPoint theo chuẩn Microsoft.',
        duration: '12 tuần',
        schedule: '1 buổi/tuần, 90 phút/buổi',
        contact: 'Liên hệ học thử',
        outcomes: [
            'Thành thạo Word, Excel, PowerPoint nâng cao',
            'Đạt chứng chỉ MOS Office Specialist',
            'Kỹ năng văn phòng chuyên nghiệp',
            'Tăng khả năng cạnh tranh trong việc làm',
            'Mở rộng cơ hội công việc quốc tế'
        ],
        modules: [
            {
                title: 'Module 1: Word - Document Creation',
                lessons: [
                    'Tạo document mới',
                    'Style: Heading, Body text',
                    'Paragraph formatting: Indent, spacing',
                    'List: Bullet, numbering',
                    'Table: Create, design',
                    'Image: Insert, resize',
                    'Header and Footer',
                    'Page break, section break',
                    'Styles: Custom styles',
                    'Template: Sử dụng template',
                    'Dự án: Professional document',
                    'Dự án: Resume format'
                ]
            },
            {
                title: 'Module 2: Word - Advanced Features',
                lessons: [
                    'Mail merge: Data merging',
                    'Find & Replace',
                    'Track changes: Collaboration',
                    'Comments: Nhận xét',
                    'Protection: Document security',
                    'Sections: Multi-section document',
                    'Page numbering',
                    'Table of Contents: Auto TOC',
                    'Bookmarks and links',
                    'Form fields',
                    'Dự án: Business letter',
                    'Dự án: Multi-page report'
                ]
            },
            {
                title: 'Module 3: Excel - Data & Formula',
                lessons: [
                    'Cell format: Number, currency, date',
                    'Formula: Absolute, relative reference',
                    'Function: IF, VLOOKUP',
                    'Function: SUMIF, AVERAGEIF',
                    'Function: CONCATENATE, TEXT',
                    'Data validation',
                    'Conditional formatting',
                    'Freeze panes',
                    'Sort: Multi-level sort',
                    'Filter: AutoFilter, Advanced filter',
                    'Dự án: Data analysis',
                    'Dự án: Budget spreadsheet'
                ]
            },
            {
                title: 'Module 4: Excel & PowerPoint Advanced',
                lessons: [
                    'Pivot Table: Data summary',
                    'Chart: Advanced chart types',
                    'Sparklines: Mini charts',
                    'Data analysis tools',
                    'PowerPoint: Slide master',
                    'Slide layout customization',
                    'Animation: Advanced timing',
                    'Transition: Slide transition',
                    'Presenter notes: Speaker notes',
                    'Print settings',
                    'Dự án: Executive presentation',
                    'Dự án: MOS exam practice'
                ]
            }
        ]
    }
};
