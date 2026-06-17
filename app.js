const LEVELS = [
  { score: 200, title: "超基礎", note: "身近な物と基本動作" },
  { score: 300, title: "基礎", note: "日常・職場の基本語" },
  { score: 400, title: "初級", note: "短い案内や連絡" },
  { score: 500, title: "中級入口", note: "一般的な業務表現" },
  { score: 600, title: "中級", note: "幅広い職場場面" },
  { score: 700, title: "中上級", note: "抽象的な業務語彙" },
  { score: 800, title: "上級", note: "精密な文書表現" },
  { score: 900, title: "最上級", note: "低頻度・高度な語彙" }
];

const WORDS_PER_GROUP = 100;

const RAW_WORDS = {
  200: [
    ["desk", "机", "名詞", "The keys are on my desk.", "鍵は私の机の上にあります。"],
    ["chair", "椅子", "名詞", "Please take a chair near the window.", "窓の近くの椅子に座ってください。"],
    ["door", "ドア、扉", "名詞", "The front door is open.", "正面のドアは開いています。"],
    ["window", "窓", "名詞", "She is standing by the window.", "彼女は窓のそばに立っています。"],
    ["meet", "会う", "動詞", "We will meet at the station.", "私たちは駅で会います。"],
    ["call", "電話する、呼ぶ", "動詞", "Please call me this afternoon.", "今日の午後、私に電話してください。"],
    ["help", "助ける、手伝う", "動詞", "Can you help this customer?", "このお客様を手伝ってもらえますか。"],
    ["open", "開ける、開いている", "動詞・形容詞", "The store opens at nine.", "その店は9時に開店します。"],
    ["close", "閉める、閉まる", "動詞", "Please close the gate.", "門を閉めてください。"],
    ["buy", "買う", "動詞", "I need to buy a ticket.", "私は切符を買う必要があります。"],
    ["sell", "売る", "動詞", "They sell office supplies.", "彼らは事務用品を販売しています。"],
    ["start", "始める、始まる", "動詞", "The class starts at ten.", "授業は10時に始まります。"],
    ["finish", "終える、終わる", "動詞", "We finished the work early.", "私たちは仕事を早く終えました。"],
    ["today", "今日", "副詞・名詞", "The manager is busy today.", "マネージャーは今日忙しいです。"],
    ["tomorrow", "明日", "副詞・名詞", "Your package will arrive tomorrow.", "荷物は明日到着します。"]
  ],
  300: [
    ["office", "事務所、オフィス", "名詞", "Our office is on the third floor.", "私たちのオフィスは3階です。"],
    ["meeting", "会議、打ち合わせ", "名詞", "The meeting begins after lunch.", "会議は昼食後に始まります。"],
    ["customer", "顧客、客", "名詞", "A customer is waiting outside.", "お客様が外で待っています。"],
    ["order", "注文、注文する", "名詞・動詞", "I placed an order online.", "私はオンラインで注文しました。"],
    ["price", "価格、値段", "名詞", "The price includes breakfast.", "料金には朝食が含まれます。"],
    ["receipt", "領収書、レシート", "名詞", "Keep the receipt for your records.", "記録のために領収書を保管してください。"],
    ["schedule", "予定、予定を組む", "名詞・動詞", "I checked the train schedule.", "私は電車の時刻表を確認しました。"],
    ["arrive", "到着する", "動詞", "The bus will arrive soon.", "バスはまもなく到着します。"],
    ["leave", "出発する、去る", "動詞", "The flight leaves at six.", "その便は6時に出発します。"],
    ["borrow", "借りる", "動詞", "May I borrow your pen?", "あなたのペンを借りてもいいですか。"],
    ["return", "返す、戻る", "動詞", "Please return the form by Friday.", "金曜日までに用紙を返してください。"],
    ["available", "利用できる、空いている", "形容詞", "A table is available near the entrance.", "入口近くの席が空いています。"],
    ["busy", "忙しい", "形容詞", "The lobby is busy this morning.", "今朝、ロビーは混雑しています。"],
    ["early", "早く、早い", "副詞・形容詞", "She came to work early.", "彼女は早く出勤しました。"],
    ["late", "遅く、遅い", "副詞・形容詞", "The delivery is two days late.", "配達は2日遅れています。"]
  ],
  400: [
    ["employee", "従業員", "名詞", "Every employee received a new badge.", "全従業員が新しいバッジを受け取りました。"],
    ["department", "部署、部門", "名詞", "Contact the sales department for details.", "詳細は営業部に連絡してください。"],
    ["document", "書類、文書", "名詞", "Please sign the document below.", "下の書類に署名してください。"],
    ["reservation", "予約", "名詞", "I made a dinner reservation for four.", "4人分の夕食を予約しました。"],
    ["delivery", "配達、配送", "名詞", "Free delivery is offered this week.", "今週は無料配送が提供されています。"],
    ["repair", "修理する、修理", "動詞・名詞", "A technician will repair the printer.", "技術者がプリンターを修理します。"],
    ["confirm", "確認する", "動詞", "Please confirm your arrival time.", "到着時刻を確認してください。"],
    ["cancel", "取り消す、中止する", "動詞", "They canceled the outdoor event.", "彼らは屋外イベントを中止しました。"],
    ["choose", "選ぶ", "動詞", "You can choose either color.", "どちらの色でも選べます。"],
    ["provide", "提供する", "動詞", "The hotel provides free Wi-Fi.", "そのホテルは無料Wi-Fiを提供しています。"],
    ["attend", "出席する、参加する", "動詞", "More than fifty people attended the seminar.", "50人以上がセミナーに参加しました。"],
    ["local", "地元の、地域の", "形容詞", "We buy food from local farms.", "私たちは地元の農場から食品を買います。"],
    ["recent", "最近の", "形容詞", "Recent changes are shown in blue.", "最近の変更は青色で示されています。"],
    ["possible", "可能な", "形容詞", "Is an earlier appointment possible?", "もっと早い予約は可能ですか。"],
    ["enough", "十分な", "形容詞・副詞", "We have enough chairs for everyone.", "全員分の椅子があります。"]
  ],
  500: [
    ["applicant", "応募者", "名詞", "Each applicant must submit two references.", "各応募者は推薦者を2名提出する必要があります。"],
    ["equipment", "設備、機器", "名詞", "Safety equipment is stored downstairs.", "安全装備は階下に保管されています。"],
    ["invoice", "請求書", "名詞", "The invoice was sent by email.", "請求書はメールで送られました。"],
    ["shipment", "発送品、出荷", "名詞", "The shipment reached the warehouse yesterday.", "発送品は昨日倉庫に到着しました。"],
    ["colleague", "同僚", "名詞", "A colleague introduced me to the client.", "同僚が私を顧客に紹介しました。"],
    ["postpone", "延期する", "動詞", "We had to postpone the workshop.", "私たちは研修会を延期しなければなりませんでした。"],
    ["recommend", "勧める、推薦する", "動詞", "I recommend taking the express train.", "急行列車に乗ることを勧めます。"],
    ["require", "必要とする、要求する", "動詞", "This position requires travel.", "この職種では出張が必要です。"],
    ["replace", "交換する、取って代わる", "動詞", "The old lights will be replaced.", "古い照明は交換されます。"],
    ["increase", "増える、増やす、増加", "動詞・名詞", "Online sales increased in May.", "オンライン売上は5月に増加しました。"],
    ["reduce", "減らす", "動詞", "The new process reduces waiting time.", "新しい手順は待ち時間を減らします。"],
    ["convenient", "便利な、都合のよい", "形容詞", "The hotel has a convenient location.", "そのホテルは便利な場所にあります。"],
    ["responsible", "責任がある、担当している", "形容詞", "Mika is responsible for training new staff.", "ミカは新人研修を担当しています。"],
    ["annual", "年1回の、年間の", "形容詞", "The annual report is now available.", "年次報告書が利用可能になりました。"],
    ["currently", "現在、今のところ", "副詞", "The main entrance is currently closed.", "正面入口は現在閉鎖されています。"]
  ],
  600: [
    ["appointment", "予約、約束、任命", "名詞", "I rescheduled my dental appointment.", "歯科の予約を変更しました。"],
    ["advertisement", "広告", "名詞", "The advertisement appeared in a trade magazine.", "その広告は業界誌に掲載されました。"],
    ["arrangement", "手配、取り決め", "名詞", "Travel arrangements are almost complete.", "旅行の手配はほぼ完了しています。"],
    ["complaint", "苦情、不満", "名詞", "The manager responded to the complaint promptly.", "支配人は苦情にすぐ対応しました。"],
    ["estimate", "見積もり、見積もる", "名詞・動詞", "The contractor provided a written estimate.", "請負業者は書面の見積もりを出しました。"],
    ["facility", "施設、設備", "名詞", "The new facility can serve 300 guests.", "新施設は300人の客に対応できます。"],
    ["inventory", "在庫、在庫品", "名詞", "We check the inventory every Monday.", "私たちは毎週月曜日に在庫を確認します。"],
    ["negotiate", "交渉する", "動詞", "The two companies negotiated a lower rate.", "両社はより低い料金を交渉しました。"],
    ["participate", "参加する", "動詞", "Employees may participate in the survey.", "従業員は調査に参加できます。"],
    ["purchase", "購入する、購入品", "動詞・名詞", "Tickets may be purchased at the counter.", "切符は窓口で購入できます。"],
    ["register", "登録する", "動詞", "Register online before September 1.", "9月1日までにオンライン登録してください。"],
    ["approve", "承認する", "動詞", "The director approved the revised budget.", "部長は修正予算を承認しました。"],
    ["efficient", "効率的な", "形容詞", "The updated system is more efficient.", "更新されたシステムはより効率的です。"],
    ["temporary", "一時的な、臨時の", "形容詞", "Use the temporary entrance on Pine Street.", "パイン通りの臨時入口を利用してください。"],
    ["immediately", "直ちに", "副詞", "Report any damage immediately.", "損傷があれば直ちに報告してください。"]
  ],
  700: [
    ["acquisition", "買収、取得", "名詞", "The acquisition expanded the firm's market share.", "その買収で会社の市場占有率が拡大しました。"],
    ["budget", "予算", "名詞", "The project stayed within its budget.", "その事業は予算内に収まりました。"],
    ["candidate", "候補者、志願者", "名詞", "Three candidates were invited for interviews.", "3人の候補者が面接に招かれました。"],
    ["contract", "契約、契約する", "名詞・動詞", "The supplier renewed its contract.", "供給業者は契約を更新しました。"],
    ["deadline", "締め切り", "名詞", "The application deadline is approaching.", "応募締め切りが近づいています。"],
    ["expansion", "拡大、拡張", "名詞", "The airport expansion will create new jobs.", "空港の拡張は新しい雇用を生みます。"],
    ["maintenance", "保守、整備", "名詞", "The elevator is closed for maintenance.", "エレベーターは整備のため停止中です。"],
    ["manufacturer", "製造業者、メーカー", "名詞", "Contact the manufacturer about the warranty.", "保証について製造元に連絡してください。"],
    ["notify", "知らせる、通知する", "動詞", "Applicants will be notified by Friday.", "応募者には金曜日までに通知されます。"],
    ["qualify", "資格を得る、適任である", "動詞", "Members qualify for an additional discount.", "会員は追加割引を受ける資格があります。"],
    ["reimbursement", "払い戻し、経費精算", "名詞", "Submit receipts to request reimbursement.", "経費精算を申請するには領収書を提出してください。"],
    ["substantial", "かなりの、相当な", "形容詞", "The renovation produced substantial savings.", "改修によって相当な節約が実現しました。"],
    ["mandatory", "義務的な、必須の", "形容詞", "Safety training is mandatory for all staff.", "安全研修は全職員に必須です。"],
    ["approximately", "およそ、約", "副詞", "The tour lasts approximately 90 minutes.", "見学は約90分です。"],
    ["consequently", "その結果、したがって", "副詞", "Demand fell; consequently, production was reduced.", "需要が落ち、その結果、生産が縮小されました。"]
  ],
  800: [
    ["allocation", "配分、割り当て", "名詞", "The board reviewed the allocation of funds.", "取締役会は資金配分を検討しました。"],
    ["compliance", "順守、適合", "名詞", "The audit confirmed compliance with safety rules.", "監査で安全規則の順守が確認されました。"],
    ["contingency", "不測の事態、緊急時の備え", "名詞", "We prepared a contingency plan for delays.", "遅延に備えた緊急時対応計画を用意しました。"],
    ["discrepancy", "不一致、食い違い", "名詞", "An accountant found a discrepancy in the invoice.", "会計担当者が請求書の不一致を見つけました。"],
    ["incentive", "奨励策、動機", "名詞", "The company offers incentives for energy savings.", "会社は省エネへの奨励策を提供しています。"],
    ["merger", "合併", "名詞", "The merger is expected to be completed in July.", "合併は7月に完了する見込みです。"],
    ["obligation", "義務、責任", "名詞", "Both parties fulfilled their contractual obligations.", "両当事者は契約上の義務を果たしました。"],
    ["preliminary", "予備的な、暫定的な", "形容詞", "Preliminary results will be released tomorrow.", "暫定結果は明日公表されます。"],
    ["procurement", "調達、購買", "名詞", "The procurement team contacted several vendors.", "調達チームは複数の業者に連絡しました。"],
    ["renovation", "改修、改装", "名詞", "The lobby will remain open during renovation.", "改装中もロビーは利用できます。"],
    ["retain", "保持する、雇い続ける", "動詞", "The firm introduced benefits to retain skilled staff.", "会社は熟練社員を引き留めるため福利厚生を導入しました。"],
    ["specification", "仕様、明細", "名詞", "The device meets all technical specifications.", "その装置はすべての技術仕様を満たしています。"],
    ["tentative", "仮の、暫定的な", "形容詞", "A tentative schedule was shared with participants.", "仮日程が参加者に共有されました。"],
    ["undergo", "経験する、受ける", "動詞", "The bridge will undergo a safety inspection.", "その橋は安全検査を受けます。"],
    ["whereas", "一方で、～であるのに対し", "接続詞", "Online sales rose, whereas store sales declined.", "オンライン売上は増えた一方、店舗売上は減少しました。"]
  ],
  900: [
    ["accreditation", "認定、認可", "名詞", "The laboratory renewed its international accreditation.", "その研究所は国際認定を更新しました。"],
    ["consolidate", "統合する、強化する", "動詞", "The company will consolidate two regional offices.", "会社は2つの地域事務所を統合します。"],
    ["deterioration", "悪化、劣化", "名詞", "Regular inspections prevent equipment deterioration.", "定期点検は機器の劣化を防ぎます。"],
    ["feasibility", "実現可能性", "名詞", "A study will assess the project's feasibility.", "調査で事業の実現可能性を評価します。"],
    ["fluctuation", "変動、上下", "名詞", "Currency fluctuations affected overseas revenue.", "為替変動が海外収益に影響しました。"],
    ["incumbent", "現職者、現任の", "名詞・形容詞", "The incumbent director will retire in March.", "現職の部長は3月に退職します。"],
    ["prerequisite", "前提条件、必須条件", "名詞", "Prior experience is a prerequisite for the role.", "実務経験がその職務の必須条件です。"],
    ["proprietary", "専有の、独自開発の", "形容詞", "The device uses proprietary software.", "その装置は独自開発のソフトウェアを使用します。"],
    ["rectify", "修正する、是正する", "動詞", "The vendor acted quickly to rectify the error.", "業者は誤りを修正するため迅速に対応しました。"],
    ["redundant", "余分な、不要になった", "形容詞", "The update made several manual steps redundant.", "更新により複数の手作業が不要になりました。"],
    ["scrutiny", "精査、厳しい監視", "名詞", "The proposal came under close scrutiny.", "その提案は厳密な精査を受けました。"],
    ["stringent", "厳格な、厳しい", "形容詞", "The factory follows stringent quality standards.", "工場は厳格な品質基準に従っています。"],
    ["subsidiary", "子会社", "名詞", "The subsidiary manages sales in Southeast Asia.", "その子会社は東南アジアの販売を管理しています。"],
    ["waive", "免除する、放棄する", "動詞", "The bank agreed to waive the service fee.", "銀行は手数料を免除することに同意しました。"],
    ["unanimously", "全会一致で", "副詞", "The committee unanimously approved the proposal.", "委員会は全会一致で提案を承認しました。"]
  ]
};

const FALLBACK_WORDS = Object.entries(RAW_WORDS).flatMap(([level, rows]) =>
  rows.map(([word, meaning, pos, example, exampleJa]) => ({
    id: `${level}-${word}`,
    level: Number(level),
    word,
    meaning,
    pos,
    example,
    exampleJa
  }))
);

const WORDS = Array.isArray(window.TOEIC_WORDS) && window.TOEIC_WORDS.length
  ? window.TOEIC_WORDS
  : FALLBACK_WORDS;

const STORAGE_KEY = "toeic-vocab-steps-state-v1";
const defaultState = {
  progress: {},
  mistakes: [],
  checked: [],
  favorites: [],
  settings: { level: 500, group: 1, count: 10, autoSpeak: true, hideChoices: false, source: "level" },
  lastLevel: 500
};

let state = loadState();
let currentView = "home";
let quiz = null;
let installPrompt = null;
let wordsFilter = { query: "", level: "all" };
let wordsVisibleLimit = 100;
let toastTimer;

const app = document.querySelector("#app");
const wordDialog = document.querySelector("#wordDialog");
const wordDialogContent = document.querySelector("#wordDialogContent");
const sourceDialog = document.querySelector("#sourceDialog");
const toast = document.querySelector("#toast");

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return {
      ...defaultState,
      ...saved,
      progress: saved?.progress || {},
      mistakes: saved?.mistakes || [],
      checked: saved?.checked || saved?.favorites || [],
      favorites: saved?.favorites || [],
      settings: { ...defaultState.settings, ...(saved?.settings || {}) }
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getSpeakText(word) {
  return word.speechText || word.audioText || word.word;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char]));
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getStats() {
  const records = Object.values(state.progress);
  const answered = records.reduce((sum, item) => sum + item.attempts, 0);
  const correct = records.reduce((sum, item) => sum + item.correct, 0);
  const mastered = WORDS.filter((word) => isMastered(word.id)).length;
  return { answered, correct, mastered, accuracy: answered ? Math.round((correct / answered) * 100) : 0 };
}

function isMastered(id) {
  const item = state.progress[id];
  return Boolean(item && item.correct >= 2 && item.correct / item.attempts >= 0.75);
}

function getLevelWords(level) {
  return WORDS.filter((word) => word.level === Number(level));
}

function getLevelGroupCount(level) {
  return Math.max(1, Math.ceil(getLevelWords(level).length / WORDS_PER_GROUP));
}

function normalizeGroup(level, group = state.settings.group) {
  const value = Number(group) || 1;
  return Math.min(Math.max(value, 1), getLevelGroupCount(level));
}

function getGroupRange(group, level = state.settings.level) {
  const safeGroup = normalizeGroup(level, group);
  const total = getLevelWords(level).length;
  const start = (safeGroup - 1) * WORDS_PER_GROUP + 1;
  const end = Math.min(start + WORDS_PER_GROUP - 1, total);
  return `${start}-${end}`;
}

function getLevelGroupWords(level, group = state.settings.group) {
  const safeGroup = normalizeGroup(level, group);
  const start = (safeGroup - 1) * WORDS_PER_GROUP;
  return getLevelWords(level).slice(start, start + WORDS_PER_GROUP);
}

function getSourceWords(source = state.settings.source, level = state.settings.level, group = state.settings.group) {
  if (source === "mistakes") return WORDS.filter((word) => state.mistakes.includes(word.id));
  if (source === "checked") return WORDS.filter((word) => state.checked.includes(word.id));
  return getLevelGroupWords(level, group);
}

function isUnanswered(word) {
  return !state.progress[word.id]?.attempts;
}

function needsPractice(word) {
  return state.mistakes.includes(word.id) || !isMastered(word.id);
}

function prioritizeQuizPool(pool) {
  const unanswered = [];
  const practice = [];
  const mastered = [];
  pool.forEach((word) => {
    if (isUnanswered(word)) unanswered.push(word);
    else if (needsPractice(word)) practice.push(word);
    else mastered.push(word);
  });
  return [...shuffle(unanswered), ...shuffle(practice), ...shuffle(mastered)];
}

function isPhraseItem(word) {
  return word.pos?.includes("熟語") || word.source === "TOEIC phrase" || word.id?.includes("-phrase");
}

function getDistractorCandidates(word, pool, source) {
  const sourceDistractors = source === "level" ? pool : WORDS.filter((item) => item.level === word.level);
  if (!isPhraseItem(word)) return sourceDistractors;
  const sameSourcePhrases = sourceDistractors.filter((item) => isPhraseItem(item));
  if (sameSourcePhrases.length >= 4) return sameSourcePhrases;
  const sameLevelPhrases = WORDS.filter((item) => item.level === word.level && isPhraseItem(item));
  if (sameLevelPhrases.length >= 4) return sameLevelPhrases;
  return WORDS.filter((item) => isPhraseItem(item));
}

function makeQuizQuestion(word, pool, source) {
  const sourceDistractors = getDistractorCandidates(word, pool, source);
  const sameLevel = sourceDistractors.filter((item) => item.id !== word.id && item.meaning !== word.meaning);
  const distractors = shuffle(sameLevel).slice(0, 3);
  return { word, options: shuffle([word, ...distractors]), selectedId: null, choicesHidden: true };
}

function getSourceLabel(source = state.settings.source, level = state.settings.level, group = state.settings.group) {
  if (source === "mistakes") return "間違えた単語";
  if (source === "checked") return "チェックした単語";
  return `${level}点・${getGroupRange(group, level)}番`;
}

function setActiveNav(name) {
  document.querySelectorAll("[data-nav]").forEach((button) => {
    button.classList.toggle("active", button.dataset.nav === name);
  });
}

function showView(name) {
  currentView = name;
  if (name === "home") renderHome();
  if (name === "setup") renderSetup();
  if (name === "words") renderWords();
  setActiveNav(name === "quiz" || name === "result" ? "setup" : name);
  app.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderHome() {
  const stats = getStats();
  const nextLevel = state.lastLevel || 500;
  app.innerHTML = `
    <section class="view">
      <div class="hero">
        <span class="eyebrow">ONE STEP, EVERY DAY</span>
        <h1>単語・表現力を、<br>スコアに変える。</h1>
        <p class="lead">目標レベルから単語と定型表現を学び、音声と4択テストで定着させます。</p>
        <div class="hero-actions">
          <button class="primary-button" type="button" data-start-level="${nextLevel}">${nextLevel}点レベルを始める</button>
          <button class="secondary-button" type="button" data-go="words">単語帳を見る</button>
          ${installPrompt ? '<button class="secondary-button" type="button" data-install>アプリとして追加</button>' : ""}
        </div>
      </div>

      <div class="stats-row" aria-label="学習状況">
        <div class="stat-card"><strong>${stats.mastered}</strong><span>習得した単語</span></div>
        <div class="stat-card"><strong>${stats.answered}</strong><span>回答した問題</span></div>
        <div class="stat-card"><strong>${stats.accuracy}%</strong><span>正答率</span></div>
      </div>

      <div class="review-grid">
        <button class="review-card mistake-card" type="button" data-review-source="mistakes">
          <span class="review-icon">×</span>
          <span><strong>間違えた単語</strong><small>${state.mistakes.length}語を復習</small></span>
        </button>
        <button class="review-card checked-card" type="button" data-review-source="checked">
          <span class="review-icon">✓</span>
          <span><strong>チェック単語</strong><small>${state.checked.length}語を復習</small></span>
        </button>
      </div>

      <div class="section-heading">
        <div><span class="eyebrow">CHOOSE YOUR GOAL</span><h2>目標スコアから選ぶ</h2></div>
        <p>各レベル${window.TOEIC_VOCAB_META?.perLevel || ""}項目・100項目ごとに選択・全${WORDS.length.toLocaleString()}項目</p>
      </div>
      <div class="level-grid">
        ${LEVELS.map((level) => {
          const levelWords = WORDS.filter((word) => word.level === level.score);
          const done = levelWords.filter((word) => isMastered(word.id)).length;
          const percent = Math.round((done / levelWords.length) * 100);
          return `
            <button class="level-card" type="button" data-level-card="${level.score}">
              <div class="score"><strong>${level.score}</strong><span>点レベル</span></div>
              <h3>${level.title}</h3>
              <p>${level.note}</p>
              <div class="progress-track"><span style="width:${percent}%"></span></div>
              <div class="level-meta"><span>${done}/${levelWords.length} 習得</span><span>${percent}%</span></div>
            </button>`;
        }).join("")}
      </div>
    </section>`;
}

function renderSetup(level = state.settings.level) {
  state.settings.level = Number(level);
  state.lastLevel = Number(level);
  const activeGroup = normalizeGroup(level, state.settings.group);
  state.settings.group = activeGroup;
  saveState();
  const source = state.settings.source;
  const sourceCount = getSourceWords(source, level, activeGroup).length;
  app.innerHTML = `
    <section class="view">
      <span class="eyebrow">QUICK TEST</span>
      <h1>4択 単語・表現テスト</h1>
      <p class="lead">英単語や定型表現を見て、最も近い日本語の意味を選びます。</p>
      <div class="panel setup-list">
        <div>
          <h3>出題する範囲</h3>
          <div class="source-options">
            <button class="source-option ${source === "level" ? "active" : ""}" type="button" data-set-source="level"><strong>スコア別</strong><small>${getSourceLabel("level", level, activeGroup)}</small></button>
            <button class="source-option ${source === "mistakes" ? "active" : ""}" type="button" data-set-source="mistakes"><strong>間違えた単語</strong><small>${state.mistakes.length}語</small></button>
            <button class="source-option ${source === "checked" ? "active" : ""}" type="button" data-set-source="checked"><strong>チェック単語</strong><small>${state.checked.length}語</small></button>
          </div>
        </div>
        ${source === "level" ? `<div>
          <h3>出題レベル</h3>
          <div class="choice-chips" data-level-chips>
            ${LEVELS.map((item) => `<button class="choice-chip ${item.score === state.settings.level ? "active" : ""}" type="button" data-set-level="${item.score}">${item.score}</button>`).join("")}
          </div>
        </div>
        <div>
          <h3>100項目セット（90単語＋10表現）</h3>
          <div class="choice-chips" data-group-chips>
            ${Array.from({ length: getLevelGroupCount(level) }, (_, index) => index + 1).map((group) => `<button class="choice-chip ${group === activeGroup ? "active" : ""}" type="button" data-set-group="${group}">${getGroupRange(group, level)}</button>`).join("")}
          </div>
        </div>` : `<div class="review-count"><strong>${sourceCount}語</strong><span>${getSourceLabel(source)}から出題します</span></div>`}
        <div>
          <h3>問題数</h3>
          <div class="choice-chips">
            ${[5, 10, 15, 30, 50, 100].map((count) => `<button class="choice-chip ${count === state.settings.count ? "active" : ""}" type="button" data-set-count="${count}">${count}問</button>`).join("")}
          </div>
        </div>
        <div class="setup-row">
          <div><label for="autoSpeak">自動で発音</label><small>問題表示時に英単語・表現を読み上げます</small></div>
          <label class="toggle"><input id="autoSpeak" type="checkbox" ${state.settings.autoSpeak ? "checked" : ""}><span></span></label>
        </div>
        <div class="setup-row">
          <div><label for="hideChoices">選択肢を隠す</label><small>クイズ画面の余白をタップすると選択肢の訳語を隠します</small></div>
          <label class="toggle"><input id="hideChoices" type="checkbox" ${state.settings.hideChoices ? "checked" : ""}><span></span></label>
        </div>
        <button class="primary-button wide-button" type="button" data-begin-quiz>${sourceCount ? "テストを始める" : "単語がまだありません"}</button>
      </div>
    </section>`;
}

function startQuiz(level = state.settings.level, count = state.settings.count, source = state.settings.source, group = state.settings.group) {
  const pool = getSourceWords(source, level, group);
  if (!pool.length) {
    showToast(source === "mistakes" ? "間違えた単語はまだありません" : source === "checked" ? "チェックした単語はまだありません" : "出題できる単語がありません");
    return;
  }
  const selected = prioritizeQuizPool(pool).slice(0, Math.min(Number(count), pool.length));
  const label = getSourceLabel(source, level, group);
  quiz = {
    level: Number(level),
    group: Number(group),
    source,
    label,
    baseLabel: label,
    retryPhase: false,
    index: 0,
    score: 0,
    questions: selected.map((word) => makeQuizQuestion(word, pool, source))
  };
  state.lastLevel = Number(level);
  state.settings.source = source;
  state.settings.group = Number(group);
  saveState();
  currentView = "quiz";
  setActiveNav("setup");
  renderQuiz();
}

function renderQuiz() {
  if (!quiz) return showView("setup");
  const question = quiz.questions[quiz.index];
  const answered = Boolean(question.selectedId);
  const checked = state.checked.includes(question.word.id);
  const percent = ((quiz.index + (answered ? 1 : 0)) / quiz.questions.length) * 100;
  const hideChoiceText = state.settings.hideChoices && question.choicesHidden && !answered;
  app.innerHTML = `
    <section class="view quiz-view ${answered ? "has-fixed-next" : ""}">
      <div class="quiz-top">
        <span class="quiz-counter">${quiz.index + 1} / ${quiz.questions.length}</span>
        <div class="progress-track"><span style="width:${percent}%"></span></div>
        <button class="icon-button" type="button" data-quit-quiz aria-label="テストを終了">×</button>
      </div>
      <div class="panel quiz-card">
        <span class="quiz-level">${escapeHtml(quiz.label)}</span>
        <h1 class="quiz-word">${escapeHtml(question.word.word)}</h1>
        <p class="quiz-pos">${escapeHtml(question.word.pos)}</p>
        <div class="quiz-word-actions">
          <button class="sound-button" type="button" data-speak="${escapeHtml(getSpeakText(question.word))}" aria-label="発音を聞く">音声</button>
          <button class="quiz-check-button ${checked ? "active" : ""}" type="button" data-toggle-checked="${question.word.id}">${checked ? "✓ チェック済み" : "＋ チェック"}</button>
        </div>
      </div>
      <div class="answer-grid">
        ${question.options.map((option, index) => {
          let className = "answer-button";
          if (answered && option.id === question.word.id) className += " correct";
          if (answered && option.id === question.selectedId && option.id !== question.word.id) className += " wrong";
          return `<button class="${className}" type="button" data-answer="${option.id}" ${answered ? "disabled" : ""}><span>${String.fromCharCode(65 + index)}.</span> <span style="${hideChoiceText ? "visibility:hidden" : ""}">${escapeHtml(option.meaning)}</span></button>`;
        }).join("")}
      </div>
      ${answered ? `
        <div class="feedback">
          <strong>${question.selectedId === question.word.id ? "正解です" : `正解: ${escapeHtml(question.word.meaning)}`}</strong>
          ${question.selectedId !== question.word.id ? '<span class="feedback-note">誤答リストに追加しました</span>' : ""}
          ${question.word.example ? `<p>${escapeHtml(question.word.example)}</p><small>${escapeHtml(question.word.exampleJa)}</small>` : ""}
        </div>
        <div class="quiz-next-bar">
          <button class="primary-button wide-button" type="button" data-next-question>${quiz.index === quiz.questions.length - 1 ? "結果を見る" : "次の問題"}</button>
        </div>
      ` : ""}
    </section>`;
  if (!answered && state.settings.autoSpeak) setTimeout(() => speak(getSpeakText(question.word)), 220);
}

function answerQuestion(selectedId) {
  const question = quiz?.questions[quiz.index];
  if (!question || question.selectedId) return;
  question.selectedId = selectedId;
  const correct = selectedId === question.word.id;
  if (correct) quiz.score += 1;
  const record = state.progress[question.word.id] || { attempts: 0, correct: 0 };
  record.attempts += 1;
  if (correct) record.correct += 1;
  if (!correct && !state.mistakes.includes(question.word.id)) state.mistakes.push(question.word.id);
  state.progress[question.word.id] = record;
  if (correct && isMastered(question.word.id)) {
    state.mistakes = state.mistakes.filter((wordId) => wordId !== question.word.id);
  }
  saveState();
  renderQuiz();
}

function startRetryPhase() {
  if (!quiz || quiz.retryPhase) return false;
  const missedWords = quiz.questions
    .filter((question) => question.selectedId !== question.word.id)
    .map((question) => question.word);
  if (!missedWords.length) return false;
  const retryPool = getSourceWords(quiz.source, quiz.level, quiz.group);
  quiz.retryPhase = true;
  quiz.label = `${quiz.baseLabel || quiz.label}・復習`;
  quiz.index = 0;
  quiz.score = 0;
  quiz.questions = missedWords.map((word) => makeQuizQuestion(word, retryPool, quiz.source));
  showToast("間違えた問題をもう一度解きます");
  renderQuiz();
  return true;
}

function nextQuestion() {
  if (!quiz) return;
  if (quiz.index >= quiz.questions.length - 1) {
    if (startRetryPhase()) return;
    return renderResult();
  }
  quiz.index += 1;
  renderQuiz();
}

function renderResult() {
  currentView = "result";
  const percent = Math.round((quiz.score / quiz.questions.length) * 100);
  const message = percent >= 80 ? "よく定着しています" : percent >= 60 ? "あと一歩です" : "復習してもう一度";
  app.innerHTML = `
    <section class="view">
      <span class="eyebrow">TEST COMPLETE</span>
      <h1>テスト結果</h1>
      <div class="panel result-score">
        <div class="score-ring" style="--score:${percent * 3.6}deg"><strong>${percent}%</strong></div>
        <h2>${message}</h2>
        <p class="lead">${quiz.questions.length}問中 ${quiz.score}問正解・${escapeHtml(quiz.label)}</p>
        <div class="result-actions">
          <button class="primary-button" type="button" data-retry>同じ条件でもう一度</button>
          <button class="secondary-button" type="button" data-go="words">単語帳で復習する</button>
          <button class="ghost-button" type="button" data-go="home">ホームへ戻る</button>
        </div>
      </div>
    </section>`;
}

function renderWords() {
  app.innerHTML = `
    <section class="view">
      <span class="eyebrow">WORD BOOK</span>
      <h1>単語・表現集</h1>
      <p class="lead">英単語・定型表現・日本語訳・品詞から検索できます。</p>
      <div class="toolbar">
        <div class="search-box"><input id="wordSearch" type="search" value="${escapeHtml(wordsFilter.query)}" placeholder="単語・表現・意味を検索" autocomplete="off"></div>
        <select id="levelFilter" aria-label="レベルで絞り込む">
          <option value="all">全レベル</option>
          <option value="mistakes" ${wordsFilter.level === "mistakes" ? "selected" : ""}>間違えた単語</option>
          <option value="checked" ${wordsFilter.level === "checked" ? "selected" : ""}>チェック単語</option>
          ${LEVELS.map((level) => `<optgroup label="${level.score}点">${Array.from({ length: getLevelGroupCount(level.score) }, (_, index) => index + 1).map((group) => {
            const value = `${level.score}-${group}`;
            return `<option value="${value}" ${value === wordsFilter.level ? "selected" : ""}>${getGroupRange(group, level.score)}番</option>`;
          }).join("")}</optgroup>`).join("")}
        </select>
      </div>
      <div id="wordResults"></div>
    </section>`;
  renderWordResults();
  const search = document.querySelector("#wordSearch");
  search.addEventListener("input", (event) => {
    wordsFilter.query = event.target.value;
    wordsVisibleLimit = 100;
    renderWordResults();
  });
  document.querySelector("#levelFilter").addEventListener("change", (event) => {
    wordsFilter.level = event.target.value;
    wordsVisibleLimit = 100;
    renderWordResults();
  });
}

function getFilteredWords() {
  const query = wordsFilter.query.trim().toLocaleLowerCase();
  const groupMatch = wordsFilter.level.match(/^(\d+)-(\d+)$/);
  const groupedIds = groupMatch
    ? new Set(getLevelGroupWords(Number(groupMatch[1]), Number(groupMatch[2])).map((word) => word.id))
    : null;
  return WORDS.filter((word) => {
    const matchesLevel = wordsFilter.level === "all"
      || (wordsFilter.level === "mistakes" && state.mistakes.includes(word.id))
      || (wordsFilter.level === "checked" && state.checked.includes(word.id))
      || groupedIds?.has(word.id);
    const haystack = `${word.word} ${word.meaning} ${word.pos}`.toLocaleLowerCase();
    return matchesLevel && (!query || haystack.includes(query));
  });
}

function renderWordResults() {
  const container = document.querySelector("#wordResults");
  if (!container) return;
  const filtered = getFilteredWords();
  const visible = filtered.slice(0, wordsVisibleLimit);
  container.innerHTML = `
    <div class="word-summary"><span>${filtered.length.toLocaleString()}語中 ${visible.length.toLocaleString()}語を表示</span><span>タップで詳細</span></div>
    ${filtered.length ? `<div class="word-list">${visible.map((word) => `
      <article class="word-row" data-open-word="${word.id}" tabindex="0" role="button">
        <div><h3>${escapeHtml(word.word)}</h3><p>${escapeHtml(word.meaning)}・${escapeHtml(word.pos)}</p></div>
        <div class="word-row-meta">
          ${state.mistakes.includes(word.id) ? '<span class="status-mark mistake" title="間違えた単語">×</span>' : ""}
          ${state.checked.includes(word.id) ? '<span class="status-mark checked" title="チェック単語">✓</span>' : ""}
          <span class="level-pill">${word.level}</span>
        </div>
      </article>`).join("")}</div>
      ${visible.length < filtered.length ? `<button class="secondary-button wide-button load-more" type="button" data-load-more>さらに100語を表示</button>` : ""}
    ` : '<div class="empty-state">条件に合う単語がありません。</div>'}`;
}

function openWord(id) {
  const word = WORDS.find((item) => item.id === id);
  if (!word) return;
  const checked = state.checked.includes(id);
  const mistake = state.mistakes.includes(id);
  wordDialogContent.innerHTML = `
    <div class="dialog-word-top">
      <div><span class="level-pill">${word.level}点レベル</span><h2 class="dialog-word">${escapeHtml(word.word)}</h2><span class="quiz-pos">${escapeHtml(word.pos)}</span></div>
      <div>
        <button class="favorite-button ${checked ? "checked" : ""}" type="button" data-toggle-checked="${word.id}" aria-label="チェック単語を切り替える">${checked ? "✓" : "＋"}</button>
        <button class="sound-button" style="margin-top:8px" type="button" data-speak="${escapeHtml(getSpeakText(word))}">音声</button>
      </div>
    </div>
    <p class="dialog-meaning">${escapeHtml(word.meaning)}</p>
    <div class="word-status-actions">
      <button class="status-action ${checked ? "active" : ""}" type="button" data-toggle-checked="${word.id}">${checked ? "✓ チェック済み" : "＋ チェック単語に追加"}</button>
      ${mistake ? `<button class="status-action mistake" type="button" data-clear-mistake="${word.id}">× 誤答リストから外す</button>` : ""}
    </div>
    ${word.example ? `<div class="example-box"><p>${escapeHtml(word.example)}</p><small>${escapeHtml(word.exampleJa)}</small></div>` : ""}`;
  if (!wordDialog.open) wordDialog.showModal();
}

function toggleChecked(id) {
  const index = state.checked.indexOf(id);
  if (index >= 0) state.checked.splice(index, 1);
  else state.checked.push(id);
  saveState();
  showToast(index >= 0 ? "チェックを外しました" : "チェック単語に追加しました");
  if (wordDialog.open) openWord(id);
  if (currentView === "words") renderWordResults();
  if (currentView === "quiz") renderQuiz();
}

function clearMistake(id) {
  state.mistakes = state.mistakes.filter((wordId) => wordId !== id);
  saveState();
  showToast("誤答リストから外しました");
  if (wordDialog.open) openWord(id);
  if (currentView === "words") renderWordResults();
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    showToast("この端末では音声読み上げを利用できません");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.82;
  const voices = window.speechSynthesis.getVoices();
  utterance.voice = voices.find((voice) => voice.lang === "en-US") || voices.find((voice) => voice.lang.startsWith("en")) || null;
  window.speechSynthesis.speak(utterance);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

document.addEventListener("click", async (event) => {
  const target = event.target.closest("button, [data-open-word]");
  if (!target) {
    if (currentView === "quiz" && state.settings.hideChoices && quiz) {
      const question = quiz.questions[quiz.index];
      if (question && !question.selectedId) {
        question.choicesHidden = !question.choicesHidden;
        renderQuiz();
      }
    }
    return;
  }
  if (target.dataset.go) showView(target.dataset.go);
  if (target.dataset.nav) showView(target.dataset.nav);
  if (target.dataset.levelCard) {
    state.settings.source = "level";
    state.settings.group = 1;
    currentView = "setup";
    setActiveNav("setup");
    renderSetup(Number(target.dataset.levelCard));
  }
  if (target.dataset.startLevel) {
    state.settings.source = "level";
    state.settings.group = 1;
    startQuiz(Number(target.dataset.startLevel), state.settings.count, "level", 1);
  }
  if (target.dataset.reviewSource) {
    state.settings.source = target.dataset.reviewSource;
    saveState();
    currentView = "setup";
    setActiveNav("setup");
    renderSetup();
  }
  if (target.dataset.setSource) {
    state.settings.source = target.dataset.setSource;
    saveState();
    renderSetup();
  }
  if (target.dataset.setLevel) {
    state.settings.group = 1;
    renderSetup(Number(target.dataset.setLevel));
  }
  if (target.dataset.setGroup) {
    state.settings.group = Number(target.dataset.setGroup);
    saveState();
    renderSetup();
  }
  if (target.dataset.setCount) {
    state.settings.count = Number(target.dataset.setCount);
    saveState();
    renderSetup();
  }
  if (target.hasAttribute("data-begin-quiz")) startQuiz();
  if (target.dataset.answer) answerQuestion(target.dataset.answer);
  if (target.hasAttribute("data-next-question")) nextQuestion();
  if (target.hasAttribute("data-retry")) startQuiz(quiz.level, quiz.questions.length, quiz.source, quiz.group);
  if (target.hasAttribute("data-quit-quiz")) {
    quiz = null;
    showView("setup");
  }
  if (target.dataset.speak) speak(target.dataset.speak);
  if (target.dataset.openWord) openWord(target.dataset.openWord);
  if (target.dataset.toggleChecked) toggleChecked(target.dataset.toggleChecked);
  if (target.dataset.clearMistake) clearMistake(target.dataset.clearMistake);
  if (target.hasAttribute("data-load-more")) {
    wordsVisibleLimit += 100;
    renderWordResults();
  }
  if (target.hasAttribute("data-close-dialog")) target.closest("dialog").close();
  if (target.hasAttribute("data-install") && installPrompt) {
    installPrompt.prompt();
    await installPrompt.userChoice;
    installPrompt = null;
    renderHome();
  }
});

document.addEventListener("keydown", (event) => {
  const row = event.target.closest("[data-open-word]");
  if (row && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openWord(row.dataset.openWord);
  }
});

document.addEventListener("change", (event) => {
  if (event.target.id === "autoSpeak") {
    state.settings.autoSpeak = event.target.checked;
    saveState();
  }
  if (event.target.id === "hideChoices") {
    state.settings.hideChoices = event.target.checked;
    saveState();
  }
});

document.querySelector("#sourceButton").addEventListener("click", () => sourceDialog.showModal());

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  if (currentView === "home") renderHome();
});

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
}

renderHome();
