// Flower Tea LOGO Design & Color Esthetics Learning Platform

// ==========================================
// 1. Navigation Logic
// ==========================================
const sections = {
    dashboard: { id: 'sec-dashboard', title: '首頁大廳', desc: '歡迎來到花茶 LOGO 設計一日課程！' },
    slides: { id: 'sec-slides', title: '簡報知識庫', desc: '瀏覽 LOGO 色彩設計與壓克力調色理論' },
    quiz: { id: 'sec-quiz', title: '概念挑戰賽', desc: '答題檢驗學習成果，爭取滿分榮耀' },
    game: { id: 'sec-game', title: '調色大挑戰', desc: '調配出最完美的花茶經典色彩！' },
    match: { id: 'sec-match', title: 'LOGO配對大挑戰', desc: '配對 20 個經典 LOGO 與品牌，考驗幾何與簡化觀察力！' }
};

function switchSection(targetKey) {
    // Update active class on nav links
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const activeNav = document.getElementById(`btn-nav-${targetKey}`);
    if (activeNav) activeNav.classList.add('active');
    
    // Update active section visibility
    document.querySelectorAll('.content-section').forEach(sec => {
        sec.classList.remove('active');
    });
    
    const activeSec = document.getElementById(sections[targetKey].id);
    if (activeSec) {
        activeSec.classList.add('active');
    }
    
    // Update header texts
    document.getElementById('current-section-title').textContent = sections[targetKey].title;
    document.getElementById('current-section-desc').textContent = sections[targetKey].desc;

    // Trigger section-specific initializations
    if (targetKey === 'slides') {
        renderSlide();
    } else if (targetKey === 'game') {
        initGameLevel();
    } else if (targetKey === 'match') {
        initMatchGame();
    }
}

// Bind navigation clicks
document.getElementById('btn-nav-dashboard').addEventListener('click', (e) => { e.preventDefault(); switchSection('dashboard'); });
document.getElementById('btn-nav-slides').addEventListener('click', (e) => { e.preventDefault(); switchSection('slides'); });
document.getElementById('btn-nav-quiz').addEventListener('click', (e) => { e.preventDefault(); switchSection('quiz'); });
document.getElementById('btn-nav-game').addEventListener('click', (e) => { e.preventDefault(); switchSection('game'); });
document.getElementById('btn-nav-match').addEventListener('click', (e) => { e.preventDefault(); switchSection('match'); });

// ==========================================
// 2. Slide Deck Component
// ==========================================
const slidesData = [
    {
        title: "單元 1：LOGO 的本質與造形簡化學（結合大師聯想）",
        content: `
            <div class="slide-body">
                <p><strong>LOGO（商標標誌）</strong>是品牌的視覺身分證。設計時，我們需透過<strong>造形聯想（如達利 Mae West 房間）</strong>與<strong>禪意簡化（如牧谿《六柿圖》）</strong>，將繁雜事物簡化為幾何。以下為 10 個全球著名標誌的「造形簡化與品牌故事」：</p>
                <div class="logo-examples-grid">
                    <button class="logo-example-btn active" onclick="showLogoDetail(0)">⭐ 星巴克</button>
                    <button class="logo-example-btn" onclick="showLogoDetail(1)">🍟 麥當勞</button>
                    <button class="logo-example-btn" onclick="showLogoDetail(2)">✔️ Nike</button>
                    <button class="logo-example-btn" onclick="showLogoDetail(3)">🍎 蘋果</button>
                    <button class="logo-example-btn" onclick="showLogoDetail(4)">📦 亞馬遜</button>
                    <button class="logo-example-btn" onclick="showLogoDetail(5)">✈️ FedEx</button>
                    <button class="logo-example-btn" onclick="showLogoDetail(6)">👜 香奈兒</button>
                    <button class="logo-example-btn" onclick="showLogoDetail(7)">🐎 法拉利</button>
                    <button class="logo-example-btn" onclick="showLogoDetail(8)">🥤 百事可樂</button>
                    <button class="logo-example-btn" onclick="showLogoDetail(9)">🧱 樂高</button>
                </div>
                <div class="logo-detail-card" id="logo-detail-content"></div>
            </div>
        `
    },
    {
        title: "單元 2：色彩心理學與品牌性格（結合課本色彩學）",
        content: `
            <div class="slide-body">
                <p>色彩是傳遞情感最快的語言。設計師會根據產品的特性，運用色彩學來建立品牌獨特的心裡暗示：</p>
                <div class="slide-card-grid">
                    <div class="slide-mini-card" style="border-top-color: var(--accent-color)">
                        <h4>對比色（醒目與強烈衝突）</h4>
                        <p>如課本中以<strong>黃色與紫色</strong>強烈對比設計出「速度感魔力鞋」。在花茶 LOGO 中，若用洛神花的「深紅」搭配葉片的「翠綠」，就能創造出微酸香甜、活力四射的視覺感，讓標誌在架上瞬間凸顯。</p>
                    </div>
                    <div class="slide-mini-card" style="border-top-color: var(--primary-color)">
                        <h4>類似色（協調、舒服與療癒）</h4>
                        <p>將相近的顏色放在一起（如黃、黃綠與綠色），能帶來平靜、舒適、柔和與穩定的視覺感受。這非常適合應用在「有機舒眠茶」、「洋甘菊茶」的 LOGO，給人無壓力的放鬆體驗。</p>
                    </div>
                </div>
                <p style="margin-top: 1.25rem;"><strong>【花草色彩指南】</strong>：綠色傳遞健康與自然（薄荷綠茶）；黃色散發溫暖陽光（洋甘菊）；洋紅充滿熱情與甜美果香（玫瑰茶）；青藍色帶有神祕與夢幻感（蝶豆花茶）。</p>
            </div>
        `
    },
    {
        title: "單元 3：壓克力顏料的四大專業藝術技法",
        content: `
            <div class="slide-body">
                <p>壓克力顏料（Acrylic）是一種由顏料粉與丙烯酸樹脂組成的合成乳膠漆，具有<strong>快乾、防水且覆蓋力強</strong>的物理特性。掌握以下專業技法，能讓你在紙上的 LOGO 實作更加生動：</p>
                <div class="slide-card-grid">
                    <div class="slide-mini-card">
                        <h4>1. 厚塗法 (Impasto)</h4>
                        <p>不加水直接使用濃稠的壓克力顏料，用筆刷或畫刀在畫紙上留下明顯的筆觸紋理，能創造出如同油畫般具有立體浮雕感的手作質感。</p>
                    </div>
                    <div class="slide-mini-card">
                        <h4>2. 重疊法 (Layering)</h4>
                        <p>利用壓克力乾後不溶於水且高覆蓋的特性。你可以先塗大面積背景色，等乾了之後，再用小筆刷疊加畫上 LOGO 圖案與品牌文字，畫錯也完全能覆蓋修正！</p>
                    </div>
                    <div class="slide-mini-card">
                        <h4>3. 乾筆法 (Dry Brush)</h4>
                        <p>畫筆保持乾燥、沾取極少水分的顏料快速在紙面掃過。這會產生粗糙、飛白、斑駁的肌理效果，適合呈現復古文青感的標誌設計。</p>
                    </div>
                    <div class="slide-mini-card">
                        <h4>4. 罩染/薄塗法 (Glazing)</h4>
                        <p>加入適量水分將顏料稀釋成半透明狀，層層薄塗重疊，讓底層顏色透出來。這種技法非常適合用來表現晶瑩剔透的茶湯漸層或透明水彩效果。</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "單元 4：光學與顏料的混色物理學",
        content: `
            <div class="slide-body">
                <p>調色是一門科學。世界上存在兩種截然不同的混色模式，它們的物理原理正好完全相反：</p>
                <div class="slide-card-grid">
                    <div class="slide-mini-card" style="border-top-color: #00b4d8">
                        <h4>加法混色（螢幕的光）</h4>
                        <p>手機與電腦螢幕是由紅(R)、綠(G)、藍(B)三種光譜所組成的。光線越多，亮度越高。當紅、綠、藍光全部以 100% 疊加時，會形成耀眼的<strong>白光</strong>。</p>
                    </div>
                    <div class="slide-mini-card" style="border-top-color: #e0115f">
                        <h4>減法混色（壓克力顏料）</h4>
                        <p>顏料的物理混色是靠吸收光譜來顯色的。青(C)、洋紅(M)、黃(Y)三原色顏料相混時，會不斷吸收（減去）光線的反射，因此<strong>越混越暗、彩度越低</strong>，三者混和最終會呈現接近<strong>黑濁色</strong>。</p>
                    </div>
                </div>
                <p style="margin-top: 1.25rem;"><strong>【調色實踐】</strong>：利用白色(W)提高顏料的<strong>明度</strong>（調出粉嫩感）；加水能降低<strong>彩度</strong>（調出半透明淡雅感）。在調色挑戰遊戲中，我們將透過調整 C、M、Y、W 來感受減法色彩的奧秘！</p>
            </div>
        `
    },
    {
        title: "單元 5：從草圖到向量化的現代設計工作流",
        content: `
            <div class="slide-body">
                <p>在實務中，專業的平面設計師在設計商標時，會遵循一套標準的設計流程：</p>
                <ul>
                    <li><strong>第一步：設定主題與風格提案 (Briefing)</strong>：觀察並收集花草素材（如盧梭《瀑布》的熱帶植物綠意），定義品牌調性是古典高雅還是清新現代。</li>
                    <li><strong>第二步：手繪創意草圖 (Sketching)</strong>：在草稿紙上快速畫出多個草案，嘗試不同的造形簡化方式與色彩配置（類似色或對比色）。</li>
                    <li><strong>第三步：向量化與數位處理 (Vectorization)</strong>：將手稿掃描進電腦，使用 Illustrator 等設計軟體，以數學曲線（貝茲曲線）重新描邊。</li>
                </ul>
                <p><strong>【為什麼要向量化？】</strong>：手繪或相片放大後會產生馬賽克模糊模糊；而向量化後的 LOGO，不論縮小到茶包袋上的 1 公分，還是放大到路邊廣告看板的 10 公尺，邊緣都一樣絕對銳利、不失真！</p>
            </div>
        `
    }
];

let currentSlideIndex = 0;

function renderSlide() {
    const viewport = document.getElementById('slide-viewport');
    const indicator = document.getElementById('slide-index-indicator');
    const slide = slidesData[currentSlideIndex];
    
    viewport.innerHTML = `
        <div class="slide-content active">
            <h2>${slide.title}</h2>
            ${slide.content}
        </div>
    `;
    
    indicator.textContent = `第 ${currentSlideIndex + 1} / ${slidesData.length} 頁`;
    
    // Enable/disable buttons
    document.getElementById('btn-prev-slide').disabled = currentSlideIndex === 0;
    document.getElementById('btn-next-slide').disabled = currentSlideIndex === slidesData.length - 1;

    // Trigger logo detail on load if Slide 1
    if (currentSlideIndex === 0) {
        showLogoDetail(0);
    }
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    if (currentSlideIndex < 0) currentSlideIndex = 0;
    if (currentSlideIndex >= slidesData.length) currentSlideIndex = slidesData.length - 1;
    renderSlide();
}

// ==========================================
// 3. Quiz Component
// ==========================================
const quizQuestions = [
    {
        question: "1. 想要讓花茶 LOGO 看起來「最醒目、最容易在貨架上被辨識」，應採用哪種色彩搭配原理？",
        options: [
            "A. 類似色（和諧舒服的相近色組合）",
            "B. 對比色（強烈反差的互補色組合，如黃與紫）",
            "C. 降低明度（加入大量黑色）",
            "D. 降低彩度（加入大量水稀釋）"
        ],
        answer: 1, // B
        explanation: "正確答案是 B。對比色擺在一起會形成強烈反差，讓彼此更加凸顯，能大幅提高顯眼度與辨識度。"
    },
    {
        question: "2. 關於類似色（相近色）的色彩搭配，給人的心理感受敘述，以下何者正確？",
        options: [
            "A. 充滿速度感、刺激與冒險",
            "B. 混亂、危險與警告",
            "C. 和諧、舒適、柔和與穩定",
            "D. 寒冷、孤單與寂寞"
        ],
        answer: 2, // C
        explanation: "正確答案是 C。類似色看起來非常協調舒服，適合表達舒緩、放鬆、和諧的品牌性格。"
    },
    {
        question: "3. 壓克力顏料是今天實作課的主角，關於它的特性，以下哪一項是錯誤的？",
        options: [
            "A. 乾燥速度極慢，需要等好幾天才能上第二層",
            "B. 乾燥後具有防水功能，不易褪色",
            "C. 覆蓋力極強，畫錯了等乾之後可以直接疊色覆蓋修正",
            "D. 乾了之後會形成塑膠薄膜，如果畫筆不洗乾淨會直接報銷"
        ],
        answer: 0, // A
        explanation: "正確答案是 A。壓克力顏料乾燥速度非常快（通常幾分鐘內即乾），能快速層疊上色。"
    },
    {
        question: "4. 在水彩調色中，如果想要讓單一顏色「變淡、降低彩度」，主要是透過加入什麼？而在壓克力顏料中要表現「粉嫩漸層、提高明度」，則是加入什麼？",
        options: [
            "A. 加入黑色 / 加入藍色",
            "B. 加入黃色 / 加入綠色",
            "C. 加入大量水 / 加入白色顏料",
            "D. 加入黏土 / 加入廣告顏料"
        ],
        answer: 2, // C
        explanation: "正確答案是 C。水彩加水會降低彩度變透明；而壓克力調整明度（深淺）通常是加入「白色顏料」調出粉嫩感。"
    },
    {
        question: "5. 教材中引導我們設計吉祥物或 LOGO 時，正確的創意設計步驟順序應該是？",
        options: [
            "A. 直接動手畫 -> 收集材料 -> 設定主題",
            "B. 設定主題 -> 收集素材 -> 繪製設計圖（畫下構想）",
            "C. 隨意亂塗 -> 丟掉重畫 -> 詢問老師",
            "D. 擺放筆洗 -> 調色上色 -> 寫下品牌名"
        ],
        answer: 1, // B
        explanation: "正確答案是 B。專業設計流程為：1. 設定主題、2. 收集素材、3. 繪製設計圖，之後才進行實作上色。"
    },
    {
        question: "6. 大師達利 (Dali) 曾把女星五官聯想成房間裡的幕簾與沙發。這在 LOGO 設計中，屬於什麼手法的運用？",
        options: [
            "A. 隨意亂塗",
            "B. 造形聯想與重組",
            "C. 精確寫實描繪",
            "D. 向量圖形放大"
        ],
        answer: 1, // B
        explanation: "正確答案是 B。將生活中的實物與花草，透過外形相似度進行造形的「聯想與重組」，是設計創意的重要來源。"
    },
    {
        question: "7. 13世紀畫家牧谿的《六柿圖》僅用極簡的筆法與濃淡畫出柿子，這代表了 LOGO 設計中的什麼概念？",
        options: [
            "A. 繁複奢華",
            "B. 留白與極簡美學（少即是多）",
            "C. 螢幕加法混色",
            "D. 向量圖不失真"
        ],
        answer: 1, // B
        explanation: "正確答案是 B。牧谿柿子圖的留白與極簡，展現了「少即是多」的美學，這與 LOGO 去除多餘細節、只留經典線條的概念完全一致。"
    },
    {
        question: "8. 為什麼現代平面設計師在電腦中設計 LOGO 時，一定要將手稿「向量化 (Vectorization)」？",
        options: [
            "A. 向量化能讓顏色看起來有立體浮雕感",
            "B. 向量圖案不論縮小或放大，邊緣都一樣絕對銳利、不失真不模糊",
            "C. 向量化可以加速壓克力顏料的乾燥",
            "D. 向量化是為了降低顏料的彩度"
        ],
        answer: 1, // B
        explanation: "正確答案是 B。向量圖是基於數學幾何公式，因此無論如何縮放（從1公分到10公尺）都絕對清晰、邊緣銳利不失真。"
    },
    {
        question: "9. 關於光學混色與顏料混色的物理原理，以下哪項敘述是正確的？",
        options: [
            "A. 螢幕是 RGB 光的減法混色；顏料是 CMY 加法混色",
            "B. 光是加法混色越混越亮（RGB 混完為白光）；顏料是減法混色越混越暗（CMY 混完為黑濁色）",
            "C. 兩者沒有差別，調配出的結果與亮度完全一樣",
            "D. 顏料混色越混明度越高，光線混色越混明度越低"
        ],
        answer: 1, // B
        explanation: "正確答案是 B。光是加法混色，多種光重疊會更亮；顏料是減法混色，顏料重疊會吸收更多光線反射，因此越混越暗。"
    },
    {
        question: "10. 如果我們在繪製花茶 LOGO 時，想用壓克力顏料做出「厚重立體、具浮雕感」的手作筆刷質感，應該使用哪種壓克力技法？",
        options: [
            "A. 罩染/薄塗法 (Glazing)",
            "B. 乾筆法 (Dry Brush)",
            "C. 厚塗法 (Impasto)",
            "D. 重疊法 (Layering)"
        ],
        answer: 2, // C
        explanation: "正確答案是 C。厚塗法 (Impasto) 不加水直接使用濃稠顏料堆疊筆觸，可以創造出實體浮雕般的立體肌理效果。"
    }
];

let currentQuestionIndex = 0;
let quizScore = 0;
let answeredQuestions = [];

function startQuiz() {
    document.getElementById('quiz-intro-card').classList.add('hidden');
    document.getElementById('quiz-question-card').classList.remove('hidden');
    document.getElementById('quiz-results-card').classList.add('hidden');
    currentQuestionIndex = 0;
    quizScore = 0;
    answeredQuestions = [];
    showQuestion();
}

function showQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    document.getElementById('question-num').textContent = `問題 ${currentQuestionIndex + 1} / ${quizQuestions.length}`;
    document.getElementById('question-text').textContent = question.question;
    
    // Update progress bar
    const progressPercent = ((currentQuestionIndex) / quizQuestions.length) * 100;
    document.getElementById('quiz-progress').style.width = `${progressPercent}%`;
    
    const optionsContainer = document.getElementById('quiz-options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.innerHTML = `
            <span class="option-badge">${String.fromCharCode(65 + index)}</span>
            <span class="option-text">${option}</span>
        `;
        btn.onclick = () => selectOption(index);
        optionsContainer.appendChild(btn);
    });
    
    document.getElementById('quiz-feedback-box').classList.add('hidden');
}

function selectOption(selectedIndex) {
    const question = quizQuestions[currentQuestionIndex];
    const optionsContainer = document.getElementById('quiz-options-container');
    const buttons = optionsContainer.querySelectorAll('.quiz-option-btn');
    
    // Disable all options
    buttons.forEach((btn, idx) => {
        btn.classList.add('disabled');
        if (idx === question.answer) {
            btn.classList.add('correct');
        }
        if (idx === selectedIndex && selectedIndex !== question.answer) {
            btn.classList.add('wrong');
        }
    });
    
    const feedbackBox = document.getElementById('quiz-feedback-box');
    const feedbackStatus = document.getElementById('feedback-status');
    const feedbackExplanation = document.getElementById('feedback-explanation');
    
    if (selectedIndex === question.answer) {
        quizScore += 10;
        feedbackStatus.className = "feedback-status correct";
        feedbackStatus.querySelector('i').className = "fa-solid fa-circle-check";
        feedbackStatus.querySelector('span').textContent = "回答正確！";
    } else {
        feedbackStatus.className = "feedback-status wrong";
        feedbackStatus.querySelector('i').className = "fa-solid fa-circle-xmark";
        feedbackStatus.querySelector('span').textContent = "回答錯誤！";
    }
    
    feedbackExplanation.textContent = question.explanation;
    feedbackBox.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    document.getElementById('quiz-question-card').classList.add('hidden');
    const resultsCard = document.getElementById('quiz-results-card');
    resultsCard.classList.remove('hidden');
    
    document.getElementById('quiz-score').textContent = quizScore;
    
    const commentTitle = document.getElementById('score-comment');
    const commentDesc = document.getElementById('score-desc-text');
    
    if (quizScore === 100) {
        commentTitle.textContent = "🏆 滿分！色彩設計大師！";
        commentDesc.textContent = "太厲害了！你完全掌握了 LOGO 設計美學與壓克力顏料的調色特性。準備好在接下來的實作課大顯身手了嗎？快去挑戰調色遊戲吧！";
    } else if (quizScore >= 80) {
        commentTitle.textContent = "🌟 優秀！設計準達人！";
        commentDesc.textContent = "非常好！你對 LOGO 概念與顏料調色有了非常紮實的理解。去挑戰一下調色遊戲，試試你的混色直覺吧！";
    } else if (quizScore >= 60) {
        commentTitle.textContent = "👍 及格！色彩見習生！";
        commentDesc.textContent = "不錯喔！你已經懂了大部分的基本觀念。建議再看一遍簡報，或是多玩幾次調色挑戰，能讓你的調色功力更上一層樓！";
    } else {
        commentTitle.textContent = "🌱 繼續加油！設計萌芽中！";
        commentDesc.textContent = "沒關係，學習美術需要多看多練習。點擊下方按鈕重新挑戰一次，相信你這次一定能拿到更好的成績！";
    }
}

function resetQuiz() {
    startQuiz();
}

// ==========================================
// 4. Color Mixing Game Component
// ==========================================
const gameLevels = [
    {
        name: "第一關：洛神花茶紅 (Roselle Red)",
        targetColor: { r: 180, g: 15, b: 45 },
        hint: "提示：洛神花茶帶有深邃濃郁的紅色。它主要由大量的洋紅(M)與中等份量的黃色(Y)混合而成。因為顏色偏深，白色(W)請調整到 40% 左右即可，不需要青色(C)！"
    },
    {
        name: "第二關：洋甘菊茶黃 (Chamomile Yellow)",
        targetColor: { r: 250, g: 220, b: 100 },
        hint: "提示：洋甘菊是溫暖又柔和的淡黃色。需要使用大量的黃色(Y)，並混合非常少量的洋紅(M)。此外，要加入相當多的白色(W)（大約 90%）來大幅提高明度，呈現出粉嫩的感覺！"
    },
    {
        name: "第三關：薄荷綠茶綠 (Mint Green)",
        targetColor: { r: 130, g: 225, b: 170 },
        hint: "提示：薄荷綠茶是清爽柔和的粉綠色。請使用黃色(Y)搭配適量的青色(C)調配出綠色，再混入高比例的白色(W)（大約 85%）使明度提升，創造出薄荷般冰涼舒適的粉綠色調。"
    },
    {
        name: "第四關：蝶豆花茶藍 (Butterfly Pea Blue)",
        targetColor: { r: 60, g: 100, b: 210 },
        hint: "提示：蝶豆花茶是神祕而深邃的紫藍色。請使用高比例的青色(C)混合中等比例的洋紅(M)，並且加入適量的白色(W)（大約 80%）進行調和，就能調配出漂亮的夢幻紫藍色調！"
    },
    {
        name: "第五關：玫瑰粉紅 (Rose Pink)",
        targetColor: { r: 240, g: 140, b: 160 },
        hint: "提示：玫瑰粉紅是溫柔浪漫的粉色。主要使用洋紅(M)作為底色，加入微量的黃色(Y)使其偏暖，並混入非常高比例的白色(W)（約 80%）來沖淡它，不需要青色(C)！"
    },
    {
        name: "第六關：薰衣草紫 (Lavender Purple)",
        targetColor: { r: 170, g: 150, b: 230 },
        hint: "提示：薰衣草紫是優雅放鬆的粉紫色。主要由青色(C)與洋紅(M)等量混合，並加入大量的白色(W)（約 80%）來提高明度，不需要黃色(Y)！"
    },
    {
        name: "第七關：日式抹茶綠 (Matcha Green)",
        targetColor: { r: 100, g: 160, b: 70 },
        hint: "提示：抹茶綠是深邃偏黃的草綠色。請使用高比例的黃色(Y)與中等比例的青色(C)調出綠色，並混入適量的白色(W)（大約 50%）來調節深淺度。"
    },
    {
        name: "第八關：金盞花橘 (Marigold Orange)",
        targetColor: { r: 240, g: 130, b: 20 },
        hint: "提示：金盞花橘是熱情耀眼的亮橘色。請使用大量的黃色(Y)與中等比例的洋紅(M)相混，再加入少量的白色(W)（約 20%）調整，以保持顏色的鮮豔度！"
    },
    {
        name: "第九關：桑椹洛神紫 (Mulberry Purple)",
        targetColor: { r: 110, g: 30, b: 90 },
        hint: "提示：這是非常深邃的桑椹紫黑色。請混合高比例的洋紅(M)與中等比例的青色(C)，黃色(Y)只需極少量（約 10%），白色(W)也只需一點點（約 20%）以保持深沉感。"
    },
    {
        name: "第十關：茉莉象牙白 (Jasmine Ivory)",
        targetColor: { r: 245, g: 240, b: 215 },
        hint: "提示：這是帶有極淡黃綠色調的象牙白。請將白色(W)推到最高（約 95%），然後用筆尖加入極少極少的黃色(Y)（約 20%）與極微量的青色/洋紅，調出這款高雅的白色。"
    }
];

let currentGameLevelIndex = 0;
let userMixedColor = { r: 255, g: 255, b: 255 };

function initGameLevel() {
    const level = gameLevels[currentGameLevelIndex];
    document.getElementById('game-level-counter').textContent = `關卡 ${currentGameLevelIndex + 1} / ${gameLevels.length}`;
    document.getElementById('game-level-name').textContent = level.name;
    document.getElementById('game-level-hint').textContent = level.hint;
    
    // Set target color visual box
    const targetBox = document.getElementById('box-target');
    targetBox.style.backgroundColor = `rgb(${level.targetColor.r}, ${level.targetColor.g}, ${level.targetColor.b})`;
    document.getElementById('code-target').textContent = `RGB(${level.targetColor.r}, ${level.targetColor.g}, ${level.targetColor.b})`;
    
    // Reset sliders
    resetGameMix();
    
    // Hide result box
    document.getElementById('game-result-box').classList.add('hidden');
    document.getElementById('btn-next-level').style.display = 'none';
}

function updateMix() {
    const c = parseInt(document.getElementById('slider-c').value);
    const m = parseInt(document.getElementById('slider-m').value);
    const y = parseInt(document.getElementById('slider-y').value);
    const w = parseInt(document.getElementById('slider-w').value);
    
    // Update numerical readouts
    document.getElementById('val-c').textContent = `${c}%`;
    document.getElementById('val-m').textContent = `${m}%`;
    document.getElementById('val-y').textContent = `${y}%`;
    document.getElementById('val-w').textContent = `${w}%`;
    
    // Calculate subtractive mixed color
    // Cyan absorbs Red, Magenta absorbs Green, Yellow absorbs Blue
    const c_factor = c / 100;
    const m_factor = m / 100;
    const y_factor = y / 100;
    const w_factor = w / 100;
    
    // Subtractive reflection calculation:
    // Basic absorption model modified to support beautiful pastels when White is added
    let r = Math.pow(1.0 - c_factor, 1.2) * (0.08 + 0.92 * w_factor);
    let g = Math.pow(1.0 - m_factor, 1.2) * (0.08 + 0.92 * w_factor);
    let b = Math.pow(1.0 - y_factor, 1.2) * (0.08 + 0.92 * w_factor);
    
    // Clamp to 0-1
    r = Math.min(Math.max(r, 0), 1);
    g = Math.min(Math.max(g, 0), 1);
    b = Math.min(Math.max(b, 0), 1);
    
    userMixedColor.r = Math.round(r * 255);
    userMixedColor.g = Math.round(g * 255);
    userMixedColor.b = Math.round(b * 255);
    
    // Update mixed color visual box
    const mixedBox = document.getElementById('box-mixed');
    mixedBox.style.backgroundColor = `rgb(${userMixedColor.r}, ${userMixedColor.g}, ${userMixedColor.b})`;
    document.getElementById('code-mixed').textContent = `RGB(${userMixedColor.r}, ${userMixedColor.g}, ${userMixedColor.b})`;
}

function resetGameMix() {
    document.getElementById('slider-c').value = 0;
    document.getElementById('slider-m').value = 0;
    document.getElementById('slider-y').value = 0;
    document.getElementById('slider-w').value = 80; // default to some white
    updateMix();
}

function submitMix() {
    const level = gameLevels[currentGameLevelIndex];
    
    // Calculate Euclidean distance in RGB space
    const rDiff = userMixedColor.r - level.targetColor.r;
    const gDiff = userMixedColor.g - level.targetColor.g;
    const bDiff = userMixedColor.b - level.targetColor.b;
    const distance = Math.sqrt(rDiff * rDiff + gDiff * gDiff + bDiff * bDiff);
    
    // Match score mapping (max distance is ~441.67)
    // We map distance of 0 to 100%, and distance of 100+ to 0% linearly or with padding
    let matchScore = Math.max(0, 100 - (distance / 2.5));
    matchScore = Math.round(matchScore);
    
    const resultBox = document.getElementById('game-result-box');
    const scoreNum = document.getElementById('game-score-num');
    const feedbackTitle = document.getElementById('game-feedback-title');
    const feedbackText = document.getElementById('game-feedback-text');
    const nextLevelBtn = document.getElementById('btn-next-level');
    
    scoreNum.textContent = `${matchScore}%`;
    resultBox.classList.remove('hidden');
    
    if (matchScore >= 90) {
        feedbackTitle.textContent = "🎉 太棒了！完美調配！";
        feedbackTitle.style.color = "var(--primary-color)";
        feedbackText.textContent = `色彩相似度高達 ${matchScore}%！你已經成功掌握了此花茶的調色比例。`;
        nextLevelBtn.style.display = 'inline-flex';
        if (currentGameLevelIndex === gameLevels.length - 1) {
            nextLevelBtn.textContent = "完成挑戰！";
        } else {
            nextLevelBtn.textContent = "進入下一關";
        }
    } else {
        feedbackTitle.textContent = "🤔 還差一點點哦！";
        feedbackTitle.style.color = "var(--secondary-color)";
        feedbackText.textContent = `目前的色彩相似度為 ${matchScore}%。請根據上方提示，再微調一下滑桿比例試試看！`;
        nextLevelBtn.style.display = 'none';
    }
}

function nextLevel() {
    if (currentGameLevelIndex === gameLevels.length - 1) {
        alert("恭喜你！完成了所有花茶調色大挑戰關卡！你現在已經是專業的色彩魔術師囉！");
        currentGameLevelIndex = 0;
        switchSection('dashboard');
    } else {
        currentGameLevelIndex++;
        initGameLevel();
    }
}

// ==========================================
// 5. Initial Page Load
// ==========================================
window.onload = () => {
    switchSection('dashboard');
};

// ==========================================
// 6. Interactive Logo Showcase Data & Logic
// ==========================================
const logoDetails = [
    {
        title: "🧜‍♀️ 星巴克 (Starbucks) — 美人魚的簡化學",
        text: "星巴克 LOGO 起源於 16 世紀斯堪地那維亞的雙尾美人魚木雕。最初的標誌非常繁複寫實，經過數十年的『造形簡化』，最終去除了鱗片與背景，只留下綠色圓框內簡約、對稱的雙尾美人魚向量線條。綠色傳遞出自然、健康與放鬆，與咖啡豆的產地綠意相呼應。",
        logoUrl: "https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg"
    },
    {
        title: "🍟 麥當勞 (McDonald's) — 建築拱門的幾何化",
        text: "經典的金色雙拱門 M 字，最早是麥當勞早期餐廳建築外觀的黃色霓虹雙拱門。設計師將這兩個巨大實體拱門線條進行幾何簡化，融合成一個大寫的『M』字。醒目的黃色與紅色在色彩心理學中能有效激發活力與食慾，是非常經典的速食設計。",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg"
    },
    {
        title: "✔️ 耐吉 (Nike) — 勝利女神翅膀的抽象化",
        text: "Nike 標誌（Swoosh）是世界設計史上最成功的簡化代表作。設計師僅用一條極簡、流暢的動態弧線，就將希臘神話中『勝利女神』的翅膀進行了完全的抽象化，完美代表了速度、運動、能量與永不停歇的視覺衝擊力。",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
    },
    {
        title: "🍎 蘋果 (Apple) — 剪影與視覺趣味的結合",
        text: "蘋果公司的 LOGO 是一個極簡的蘋果剪影。為了防止人們在小尺寸下把它誤認為櫻桃或番茄，設計師巧妙地在右側加了一個『被咬了一口的缺口』（Bite，與電腦單位 Byte 諧音），體現出品牌追求簡潔、直覺與創新的美學理念。",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
    },
    {
        title: "📦 亞馬遜 (Amazon) — 微笑與業務範圍的融合",
        text: "亞馬遜 LOGO 下方有一條黃色弧線箭頭，從字母『A』指向『Z』，同時也構成一個溫暖的微笑。這非常巧妙且簡約地表達了兩個核心概念：1. 亞馬遜販售從 A 到 Z 的所有商品（業務廣度）；2. 我們的服務能讓顧客會心一笑（品牌溫度）。",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
    },
    {
        title: "✈️ 聯邦快遞 (FedEx) — 正負空間的極致運用",
        text: "FedEx 的 LOGO 是設計界『負空間（Negative Space）』的教科書範例。如果您仔細觀察字母『E』與『x』之間的白色空隙，會發現隱藏著一個向右的『白色箭頭』。這完全不用增加任何多餘圖形，就巧妙傳達了快遞品牌的速度、精準度與前進感。",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b9/FedEx_Express.svg"
    },
    {
        title: "👜 香奈兒 (Chanel) — 對稱與雙 C 的秩序美",
        text: "香奈兒 LOGO 由創辦人 Coco Chanel 姓名首字母兩個『C』互鎖而成。設計採用了完全左右對稱的幾何結構。黑白對比的簡約配色體現了永恆、經典、優雅與現代奢華的秩序美感。",
        logoUrl: "https://upload.wikimedia.org/wikipedia/en/9/92/Chanel_logo_interlocking_cs.svg"
    },
    {
        title: "🐎 法拉利 (Ferrari) — 英雄徽章與家鄉色彩",
        text: "著名的『躍馬』標誌，最早是一戰時期義大利傳奇飛行員機身上的個人徽章。法拉利創辦人將其簡化為黑色的躍馬剪影，並配上代表創辦人家鄉摩德納市（Modena）的鮮黃色背景。頂部搭配義大利國旗三色，象徵速度、激情與國家驕傲。",
        logoUrl: "https://aleen42.github.io/badges/src/ferrari.svg"
    },
    {
        title: "🥤 百事可樂 (Pepsi) — 動態弧線的時代簡化",
        text: "百事可樂的圓形紅白藍徽章，最初源自二戰時期的美國國旗三色。歷經多次簡化，複雜的緞帶文字被剝離，最終演變為一條流暢的白色『微笑波浪』，將圓形切割為紅藍兩半。動態的波浪弧線展現了年輕、活力與酷炫的品牌個性。",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Pepsi_2023.svg"
    },
    {
        title: "🧱 樂高 (Lego) — 玩具字體與童心色彩",
        text: "樂高 LOGO 採用紅、黃、白、黑四種鮮豔的高彩度色彩，紅白相間的氣泡字體圓潤可愛，酷似樂高積木的造形。這種幾何紅方塊與高飽和度的暖色搭配，能立刻吸引兒童注意力，激發動手拼裝與無限創意的童心。",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg"
    }
];

function showLogoDetail(index) {
    const buttons = document.querySelectorAll('.logo-example-btn');
    buttons.forEach((btn, idx) => {
        if (idx === index) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    const detail = logoDetails[index];
    const detailBox = document.getElementById('logo-detail-content');
    if (detailBox) {
        detailBox.innerHTML = `
            <div class="logo-detail-text-col">
                <div class="logo-detail-title">${detail.title}</div>
                <div class="logo-detail-text">${detail.text}</div>
            </div>
            <div class="logo-detail-img-col">
                <img src="${detail.logoUrl}" alt="${detail.title}" crossorigin="anonymous">
            </div>
        `;
    }
}
window.showLogoDetail = showLogoDetail;

// ==========================================
// 7. Interactive Logo Match Game Logic
// ==========================================
const allMatchBrands = [
    { id: 0, name: "星巴克 (Starbucks)", logoUrl: "https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg" },
    { id: 1, name: "麥當勞 (McDonald's)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg" },
    { id: 2, name: "Nike (耐吉)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
    { id: 3, name: "Apple (蘋果)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { id: 4, name: "Amazon (亞馬遜)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { id: 5, name: "FedEx (聯邦快遞)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b9/FedEx_Express.svg" },
    { id: 6, name: "Chanel (香奈兒)", logoUrl: "https://upload.wikimedia.org/wikipedia/en/9/92/Chanel_logo_interlocking_cs.svg" },
    { id: 7, name: "Ferrari (法拉利)", logoUrl: "https://aleen42.github.io/badges/src/ferrari.svg" },
    { id: 8, name: "Pepsi (百事可樂)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Pepsi_2023.svg" },
    { id: 9, name: "Lego (樂高)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg" },
    { id: 10, name: "Microsoft (微軟)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { id: 11, name: "Google (谷歌)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" },
    { id: 12, name: "Facebook (臉書)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.svg" },
    { id: 13, name: "Coca-Cola (可口可樂)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg" },
    { id: 14, name: "YouTube", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" },
    { id: 15, name: "X (原 Twitter)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023.svg" },
    { id: 16, name: "Tesla (特斯拉)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors_Mono_Logo.svg" },
    { id: 17, name: "Disney (迪士尼)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney_logo.svg" },
    { id: 18, name: "Adidas (愛迪達)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" },
    { id: 19, name: "Star Wars (星戰)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" }
];

let currentGameRoundIndex = 0;
let roundShuffledSlots = [];
let roundShuffledTags = [];
let matchedTagMap = {}; // Key: slot index (0-4), Value: Brand object or null
let selectedTagId = null; // Click-to-match active tag id

function initMatchGame() {
    currentGameRoundIndex = 0;
    matchedTagMap = {};
    selectedTagId = null;
    loadMatchRound();
}

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function loadMatchRound() {
    // 5 brands per round
    const startIdx = currentGameRoundIndex * 5;
    const currentRoundBrands = allMatchBrands.slice(startIdx, startIdx + 5);
    
    // Shuffle slots and tags separately
    roundShuffledSlots = shuffleArray(currentRoundBrands);
    roundShuffledTags = shuffleArray(currentRoundBrands);
    
    // Clear matches
    matchedTagMap = { 0: null, 1: null, 2: null, 3: null, 4: null };
    selectedTagId = null;
    
    // Update headers
    document.getElementById('match-round-counter').textContent = `回合 ${currentGameRoundIndex + 1} / 4`;
    document.getElementById('btn-submit-match').disabled = false;
    document.getElementById('btn-submit-match').textContent = "送出配對檢測";
    
    renderMatchSlots();
    renderMatchTags();
}

function renderMatchSlots() {
    const container = document.getElementById('match-slots-container');
    container.innerHTML = '';
    
    roundShuffledSlots.forEach((brand, idx) => {
        const card = document.createElement('div');
        card.className = 'match-slot-card';
        card.setAttribute('data-slot-idx', idx);
        
        card.addEventListener('dragover', handleDragOver);
        card.addEventListener('dragenter', handleDragEnter);
        card.addEventListener('dragleave', handleDragLeave);
        card.addEventListener('drop', handleDrop);
        
        // Slot Image
        const imgWrapper = document.createElement('div');
        imgWrapper.className = 'match-slot-img-wrapper';
        imgWrapper.innerHTML = `<img src="${brand.logoUrl}" alt="LOGO ${idx}" crossorigin="anonymous">`;
        card.appendChild(imgWrapper);
        
        // Drop Zone
        const dropZone = document.createElement('div');
        dropZone.className = 'match-drop-zone';
        dropZone.setAttribute('data-slot-idx', idx);
        
        const matchedBrand = matchedTagMap[idx];
        if (matchedBrand) {
            dropZone.classList.add('occupied');
            dropZone.textContent = matchedBrand.name;
        } else {
            dropZone.textContent = '放下標籤';
        }
        
        dropZone.addEventListener('click', () => handleSlotClick(idx));
        
        card.appendChild(dropZone);
        container.appendChild(card);
    });
}

function renderMatchTags() {
    const box = document.getElementById('match-tags-box');
    box.innerHTML = '';
    
    const matchedIds = Object.values(matchedTagMap)
        .filter(b => b !== null)
        .map(b => b.id);
        
    const availableTags = roundShuffledTags.filter(b => !matchedIds.includes(b.id));
    
    if (availableTags.length === 0) {
        box.innerHTML = '<p style="color: var(--text-muted); font-weight: 500; font-size: 0.95rem;">所有標籤皆已放入上方格子！</p>';
        return;
    }
    
    availableTags.forEach(brand => {
        const tag = document.createElement('div');
        tag.className = 'match-tag';
        if (selectedTagId === brand.id) {
            tag.classList.add('selected-tag');
        }
        tag.setAttribute('draggable', 'true');
        tag.setAttribute('data-tag-id', brand.id);
        tag.textContent = brand.name;
        
        tag.addEventListener('dragstart', handleDragStart);
        tag.addEventListener('dragend', handleDragEnd);
        tag.addEventListener('click', () => handleTagClick(brand.id));
        
        box.appendChild(tag);
    });
}

let draggedTagId = null;

function handleDragStart(e) {
    draggedTagId = parseInt(this.getAttribute('data-tag-id'));
    this.classList.add('dragging');
    e.dataTransfer.setData('text/plain', draggedTagId);
    e.dataTransfer.effectAllowed = 'move';
}

function handleDragEnd() {
    this.classList.remove('dragging');
    draggedTagId = null;
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function handleDragEnter(e) {
    e.preventDefault();
    this.classList.add('drag-hover');
}

function handleDragLeave() {
    this.classList.remove('drag-hover');
}

function handleDrop(e) {
    e.preventDefault();
    this.classList.remove('drag-hover');
    
    const tagId = parseInt(e.dataTransfer.getData('text/plain'));
    const slotIdx = parseInt(this.getAttribute('data-slot-idx'));
    
    if (isNaN(tagId) || isNaN(slotIdx)) return;
    
    executeMatch(tagId, slotIdx);
}

function handleTagClick(tagId) {
    if (selectedTagId === tagId) {
        selectedTagId = null;
    } else {
        selectedTagId = tagId;
    }
    renderMatchTags();
}

function handleSlotClick(slotIdx) {
    const currentOccupant = matchedTagMap[slotIdx];
    
    if (currentOccupant) {
        matchedTagMap[slotIdx] = null;
        selectedTagId = null;
        renderMatchSlots();
        renderMatchTags();
    } else if (selectedTagId !== null) {
        executeMatch(selectedTagId, slotIdx);
        selectedTagId = null;
    }
}

function executeMatch(tagId, slotIdx) {
    const brand = allMatchBrands.find(b => b.id === tagId);
    if (!brand) return;
    
    Object.keys(matchedTagMap).forEach(key => {
        if (matchedTagMap[key] && matchedTagMap[key].id === tagId) {
            matchedTagMap[key] = null;
        }
    });
    
    matchedTagMap[slotIdx] = brand;
    
    renderMatchSlots();
    renderMatchTags();
}

function resetMatchRound() {
    matchedTagMap = { 0: null, 1: null, 2: null, 3: null, 4: null };
    selectedTagId = null;
    renderMatchSlots();
    renderMatchTags();
}

function submitMatchRound() {
    const slotsContainer = document.getElementById('match-slots-container');
    const slotCards = slotsContainer.querySelectorAll('.match-slot-card');
    
    let correctCount = 0;
    let incomplete = false;
    
    slotCards.forEach((card, idx) => {
        const slotIdx = parseInt(card.getAttribute('data-slot-idx'));
        const matched = matchedTagMap[slotIdx];
        const actualBrand = roundShuffledSlots[slotIdx];
        const dropZone = card.querySelector('.match-drop-zone');
        
        if (!matched) {
            incomplete = true;
            return;
        }
        
        dropZone.classList.remove('correct', 'wrong');
        
        if (matched.id === actualBrand.id) {
            correctCount++;
            dropZone.classList.add('correct');
        } else {
            dropZone.classList.add('wrong');
        }
    });
    
    if (incomplete) {
        alert("請先完成本輪所有 LOGO 的品牌配對，再送出檢測！");
        return;
    }
    
    const submitBtn = document.getElementById('btn-submit-match');
    
    if (correctCount === 5) {
        if (currentGameRoundIndex === 3) {
            submitBtn.textContent = "完成挑戰！";
            submitBtn.disabled = true;
            alert(`🎉 恭喜你！全部配對正確！\n你完成了所有 4 回合共 20 個經典 LOGO 的配對大挑戰！幾何造形觀察力滿分！`);
            setTimeout(() => {
                switchSection('dashboard');
            }, 1000);
        } else {
            submitBtn.textContent = "進入下一輪";
            submitBtn.onclick = () => {
                currentGameRoundIndex++;
                loadMatchRound();
                submitBtn.onclick = submitMatchRound;
            };
            alert(`👍 太棒了！這一輪配對完全正確 (5/5)！準備好挑戰下一回合了嗎？`);
        }
    } else {
        alert(`🤔 這一輪有部分配對錯誤（正確數：${correctCount} / 5）。\n標示紅色的格子為錯誤配對，請重置或點擊移除錯誤標籤後再試一次！`);
    }
}

window.resetMatchRound = resetMatchRound;
window.submitMatchRound = submitMatchRound;
window.initMatchGame = initMatchGame;
