// Hồn Việt — interactions
(function () {
  'use strict';

  // Fade-in on scroll
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---------- Detail popups (one per culture card, in card order) ---------- */
  var POPUPS = [
    {
      title: 'Tết Nguyên Đán Cổ Truyền',
      img: null,
      desc: 'Tết Nguyên Đán là lễ hội lớn nhất trong năm của người Việt Nam, là thời điểm gia đình đoàn tụ, tưởng nhớ tổ tiên và cầu mong một năm mới an khang thịnh vượng với mâm ngũ quả, bánh chưng bánh giầy.',
      meaning: 'Thể hiện đạo lý "Uống nước nhớ nguồn", gắn kết tình thân gia đình và nét đẹp tâm linh hướng về cội nguồn.'
    },
    {
      title: 'Áo Dài Truyền Thống',
      img: 'assets/card8.jpg',
      desc: 'Áo dài là trang phục truyền thống biểu tượng cho nét đẹp kín đáo, thướt tha và thanh lịch của người phụ nữ Việt Nam. Qua nhiều thời kỳ, áo dài vẫn giữ nguyên được hồn cốt dân tộc.',
      meaning: 'Biểu tượng văn hóa đại diện cho nét đẹp dịu dàng, tôn vinh hình ảnh Việt Nam trên thế giới.'
    },
    {
      title: 'Văn Hóa Trà Đạo Việt',
      img: 'assets/card9.jpg',
      desc: 'Nghệ thuật thưởng trà của người Việt mang nét mộc mạc nhưng tinh tế với trà sen, trà lài, trà mạn Thái Nguyên. Thưởng trà là cách mở đầu câu chuyện, chiêm nghiệm cuộc sống.',
      meaning: 'Gắn liền với triết lý nhân sinh mộc mạc, hiếu khách và sự lắng đọng trong tâm hồn.'
    },
    {
      title: 'Múa Rối Nước',
      img: 'assets/card1.jpg',
      desc: 'Múa rối nước là loại hình nghệ thuật sân khấu dân gian độc đáo ra đời từ văn hóa lúa nước Đồng bằng Bắc Bộ. Con rối được điều khiển sau bức mành trên mặt nước sân đình.',
      meaning: 'Phản ánh sinh động đời sống lao động nông nghiệp và ước mơ về cuộc sống yên bình.'
    },
    {
      title: 'Nghệ Thuật Cải Lương',
      img: 'assets/card6.jpg',
      desc: 'Cải lương là loại hình kịch hát có nguồn gốc từ Nam Bộ, kết hợp giữa Đờn ca tài tử và sân khấu hiện đại. Với giọng ca vọng cổ ngọt ngào, cải lương đi sâu vào lòng người.',
      meaning: 'Nét văn hóa sông nước đặc trưng, bộc lộ tình cảm dạt dào và tính cách nghĩa khí người phương Nam.'
    },
    {
      title: 'Dân Ca Quan Họ Bắc Ninh',
      img: 'assets/card7.jpg',
      desc: 'Những câu hát đối đáp giao duyên giữa liền anh liền chị với giai điệu mượt mà, đằm thắm. Trang phục nón ba tầm, áo gấm quạt lụa tạo nên nét duyên dáng độc đáo.',
      meaning: 'Di sản UNESCO tôn vinh tình nghĩa con người và nghệ thuật thanh nhạc dân gian đỉnh cao.'
    },
    {
      title: 'Trò Chơi Kéo Co',
      img: 'assets/card2.jpg',
      desc: 'Môn thể thao dân gian đòi hỏi tinh thần đoàn kết và sức mạnh tập thể. Nghi lễ kéo co ở nhiều vùng quê còn mang ý nghĩa cầu mong mùa màng bội thu.',
      meaning: 'Rèn luyện sức khỏe, tinh thần thượng võ và thắt chặt tình đoàn kết cộng đồng.'
    },
    {
      title: 'Trò Chơi Ô Ăn Quan',
      img: 'assets/card3.jpg',
      desc: 'Trò chơi trí tuệ quen thuộc của trẻ em Việt Nam với bàn cờ vẽ trên đất và những hòn sỏi mộc mạc, giúp rèn luyện khả năng tính toán và tư duy.',
      meaning: 'Gắn liền với ký ức tuổi thơ làng quê thanh bình và trí tuệ dân gian.'
    },
    {
      title: 'Làng Gốm Bát Tràng',
      img: 'assets/card4.jpg',
      desc: 'Làng gốm lâu đời bên sông Hồng nổi tiếng với các sản phẩm gốm sứ tinh xảo, men ngọc, men rạn đặc trưng qua bàn tay tài hoa của các nghệ nhân.',
      meaning: 'Minh chứng cho sự sáng tạo và kỹ nghệ thủ công bậc thầy của người Việt.'
    },
    {
      title: 'Tranh Dân Gian Đông Hồ',
      img: null,
      desc: 'Dòng tranh in từ bản gỗ trên giấy điệp tự nhiên với màu sắc chế tác từ than lá tre, hoa hoa đò, sò điệp... mang đề tài sinh hoạt làng quê mộc mạc.',
      meaning: 'Lưu giữ triết lý sống hồn nhiên, ước vọng ấm no hạnh phúc của người dân lao động.'
    },
    {
      title: 'Lụa Tơ Tằm Vạn Phúc',
      img: 'assets/card5.jpg',
      desc: 'Làng lụa trần mịn, óng ả nổi tiếng từ thời nhà Nguyễn. Lụa Vạn Phúc nhẹ nhàng, thoáng mát và bền đẹp cùng thời gian.',
      meaning: 'Đỉnh cao kỹ thuật ươm tơ dệt lụa truyền thống Việt Nam.'
    }
  ];

  var overlay = document.getElementById('popupOverlay');
  var popupMedia = document.getElementById('popupMedia');
  var popupImg = document.getElementById('popupImg');
  var popupTitle = document.getElementById('popupTitle');
  var popupDesc = document.getElementById('popupDesc');
  var popupMeaning = document.getElementById('popupMeaning');
  var popupClose = document.getElementById('popupClose');

  function openPopup(index) {
    var data = POPUPS[index];
    if (!data) return;
    popupTitle.textContent = data.title;
    popupDesc.textContent = data.desc;
    popupMeaning.textContent = data.meaning;
    if (data.img) {
      popupImg.src = data.img;
      popupImg.alt = data.title;
      popupMedia.classList.add('has-img');
      popupMedia.style.display = '';
    } else {
      popupMedia.classList.remove('has-img');
      popupMedia.style.display = 'none';
    }
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('popup-open');
    popupClose.focus();
  }

  function closePopup() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('popup-open');
  }

  document.querySelectorAll('.btn-detail').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var i = parseInt(btn.getAttribute('data-popup'), 10) - 1;
      openPopup(i);
    });
  });
  popupClose.addEventListener('click', closePopup);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closePopup();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) closePopup();
  });

  /* ---------- UNESCO region tabs: swap heritage list per region ---------- */
  var REGIONS = {
    bac: [
      { t: 'Nhã Nhạc Cung Đình Huế (Thừa Thiên Huế)', d: 'Âm nhạc bác học truyền thống trên sân khấu cung đình, biểu tượng cho uy quyền và nét đẹp đài các.' },
      { t: 'Dân Ca Quan Họ Bắc Ninh', d: 'Nghệ thuật trình diễn dân ca đối đáp đặc sắc của vùng Kinh Bắc với trang phục độc đáo.' },
      { t: 'Hát Xoan Phú Thọ', d: 'Loại hình dân ca lễ nghi cầu mùa, gắn liền với tín ngưỡng thờ cúng Hùng Vương.' },
      { t: 'Tín Ngưỡng Thờ Cúng Hùng Vương', d: 'Biểu tượng gắn kết cộng đồng, lòng tri ân công đức tổ tiên dựng nước.' }
    ],
    trung: [
      { t: 'Không Gian Văn Hóa Cồng Chiêng Tây Nguyên', d: 'Âm thanh đại ngàn kết nối con người với thần linh, gắn liền với các lễ hội vòng đời.' },
      { t: 'Nghệ Thuật Bài Chòi Trung Bộ', d: 'Trò chơi dân gian kết hợp âm nhạc, thơ ca và diễn xướng vui nhộn trong ngày Tết.' },
      { t: 'Nghệ Thuật Làm Gốm Của Người Chăm', d: 'Kỹ thuật làm gốm thủ công không dùng bàn xoay độc đáo preserved ở Ninh Thuận, Bình Thuận.' }
    ],
    nam: [
      { t: 'Nghệ Thuật Đờn Ca Tài Tử Nam Bộ', d: 'Dòng âm nhạc dân gian đặc trưng miền sông nước phương Nam, phóng khoáng và ngẫu hứng.' },
      { t: 'Lễ Hội Bà Chúa Xứ Núi Sam (An Giang)', d: 'Lễ hội tâm linh lớn nhất ĐBSCL thể hiện lòng kính ngưỡng và tinh thần bao dung văn hóa.' }
    ]
  };

  var regionBtns = document.querySelectorAll('.region-btn');
  var heritageList = document.querySelector('.heritage-list');
  var regionKeys = ['bac', 'trung', 'nam'];

  function renderRegion(key) {
    var items = REGIONS[key] || [];
    heritageList.innerHTML = '';
    items.forEach(function (item) {
      var article = document.createElement('article');
      article.className = 'heritage-item visible';
      var h4 = document.createElement('h4');
      h4.textContent = item.t;
      var p = document.createElement('p');
      p.textContent = item.d;
      article.appendChild(h4);
      article.appendChild(p);
      heritageList.appendChild(article);
    });
    heritageList.classList.remove('is-swapping');
    void heritageList.offsetWidth; // restart animation
    heritageList.classList.add('is-swapping');
  }

  regionBtns.forEach(function (btn, i) {
    btn.addEventListener('click', function () {
      regionBtns.forEach(function (b) {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
      renderRegion(regionKeys[i]);
    });
  });
})();
