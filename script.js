const levelsSlider = new Swiper(".levels-slider", {
  navigation: {
    nextEl: ".levels-slider-btn-next",
    prevEl: ".levels-slider-btn-prev",
  },
  breakpoints: {
    1720: {
      slidesPerView: 5,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 3.5,
      spaceBetween: 16,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    620: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    0: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
});

$(document).ready(function () {
  $(".custom-select-wrapper").each(function () {
    const $wrapper = $(this);

    // Устанавливаем первое значение как дефолтное
    const firstOption = $wrapper.find(".custom-select-option").first();
    const defaultText = firstOption.text().trim();
    const defaultImage = firstOption.find("img").attr("src") || ""; // Получаем путь к изображению

    // Обновляем текст в элементе select-value
    $wrapper.find(".select-value").text(defaultText);

    // Устанавливаем активный класс на первое значение
    firstOption.addClass("active");

    $wrapper.find(".custom-select-header").click(function (event) {
      // Закрываем все остальные выпадающие списки
      $(".custom-select-body")
        .not($wrapper.find(".custom-select-body"))
        .slideUp();

      // Открываем/закрываем текущий выпадающий список
      $wrapper.find(".custom-select-body").slideToggle();
      event.stopPropagation(); // Остановить дальнейшее распространение события клика
    });

    $wrapper.find(".custom-select-option").click(function () {
      const selectedValue = $(this).data("value");
      const optionText = $(this).text().trim();
      const optionImage = $(this).find("img").attr("src") || ""; // Получаем путь к изображению

      // Если опция уже активная, ничего не делаем
      if ($(this).hasClass("active")) {
        return;
      }

      // Снимаем активный класс со всех опций
      $wrapper.find(".custom-select-option").removeClass("active");

      // Добавляем активный класс к выбранной опции
      $(this).addClass("active");

      // Обновляем текст в элементе select-value
      $wrapper.find(".select-value").text(optionText);

      // Проверяем, есть ли изображение
      if (optionImage) {
        // Если изображение есть, обновляем его
        $wrapper
          .find(".select-value")
          .prepend(
            `<img src="${optionImage}" alt="${optionText}" class="option-image">`
          );
      } else {
        // Если изображения нет, удаляем его
        $wrapper.find(".select-value").find("img").remove();
      }

      // Закрываем выпадающий список
      $wrapper.find(".custom-select-body").slideUp();
    });
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(".custom-select-wrapper").length) {
      $(".custom-select-body").slideUp();
    }
  });
});
$(document).ready(function () {
  const chatHeader = $(".chat-header .group-title");
  const chatBox = $(".chat-box");
  const chatMain = $(".chat-main");
  const ruleBtn = $(".rules-btn");
  const hideBtn = $(".hide-btn");
  const chatOpenBtn = $(".chat-open-btn");

  // Проверяем ширину окна и скрываем элементы, если меньше 1545px
  function checkWindowSize() {
    if ($(window).width() < 1545) {
      chatHeader.addClass("hidden");
      chatMain.addClass("hidden");
      ruleBtn.addClass("hidden");
      chatBox.addClass("hidden");
      $(".main-app-wrapper").addClass("chat-open");
      $(".header-wrapper").addClass("chat-open");

      hideBtn.css("transform", "rotate(180deg)"); // Поворачиваем кнопку
    } else {
      chatHeader.removeClass("hidden");
      chatMain.removeClass("hidden");
      ruleBtn.removeClass("hidden");
      chatBox.removeClass("hidden");
      $(".main-app-wrapper").removeClass("chat-open");
      $(".header-wrapper").removeClass("chat-open");
      hideBtn.css("transform", "rotate(0)"); // Возвращаем кнопку в исходное состояние
    }
  }

  // Проверяем размер окна при загрузке
  checkWindowSize();

  // Проверяем размер окна при изменении размера
  $(window).resize(function () {
    checkWindowSize();
  });

  chatOpenBtn.click((e) => {
    e.preventDefault();
    chatHeader.find(".group-title").fadeIn();
    chatHeader.find(".group-title").css("display", "flex");
    chatHeader.find(".rules-btn").css("display", "block");
    hideBtn.css("transform", "rotate(0)");
    chatHeader.find(".rules-btn").fadeIn();
    $(".main-app-wrapper").removeClass("chat-open");
    $(".header-wrapper").removeClass("chat-open");
    chatHeader.removeClass("hidden");
    chatMain.removeClass("hidden");
    ruleBtn.removeClass("hidden");
    chatBox.removeClass("hidden");
  });

  hideBtn.click(function () {
    chatHeader.toggleClass("hidden");
    chatMain.toggleClass("hidden");
    ruleBtn.toggleClass("hidden");
    chatBox.toggleClass("hidden");

    if (chatHeader.hasClass("hidden")) {
      chatHeader.find(".group-title").fadeOut();
      chatHeader.find(".group-title").css("display", "none");
      chatHeader.find(".rules-btn").css("display", "none");
      hideBtn.css("transform", "rotate(180deg)");
      chatHeader.find(".rules-btn").fadeOut();
      $(".main-app-wrapper").addClass("chat-open");
      $(".header-wrapper").addClass("chat-open");
    } else {
      chatHeader.find(".group-title").fadeIn();
      chatHeader.find(".group-title").css("display", "flex");
      chatHeader.find(".rules-btn").css("display", "block");
      hideBtn.css("transform", "rotate(0)");
      chatHeader.find(".rules-btn").fadeIn();
      $(".main-app-wrapper").removeClass("chat-open");
      $(".header-wrapper").removeClass("chat-open");
    }
  });
});

// $(document).ready(function () {
//   // Обработчик клика на заголовок
//   $(".wallet-select-header").on("click", function (e) {
//     e.stopPropagation(); // Предотвращаем всплытие события
//     const $walletSelectBody = $(this).siblings(".wallet-select-body");
//     if ($walletSelectBody.is(":visible")) {
//       $walletSelectBody.fadeOut();
//     } else {
//       $walletSelectBody.fadeIn();
//     }
//   });

//   // Обработчик клика на элемент списка
//   $(".wallet-select-item").on("click", function () {
//     const selectedValue = $(this).data("value");
//     const selectedText = $(this).find("h3").text();
//     const selectedSubtext = $(this).find("p").text();
//     const selectedIcon = $(this).find("img").attr("src");

//     // Обновляем заголовок
//     $(".wallet-select-header .left-group img").attr("src", selectedIcon);
//     $(".wallet-select-header .left-group h3").text(selectedText);
//     $(".wallet-select-header .left-group p").text(selectedSubtext);

//     // Закрываем выпадающий список
//     $(this).closest(".wallet-select-body").fadeOut();
//   });

//   // Закрытие выпадающего списка при клике вне его области
//   $(document).on("click", function (e) {
//     if (!$(e.target).closest(".wallet-select").length) {
//       $(".wallet-select-body").fadeOut();
//     }
//   });
// });
$(document).ready(function () {
  function initializeWalletSelect(select) {
    const $firstItem = $(select).find(".wallet-select-item").first();
    if ($firstItem.length) {
      const selectedValue = $firstItem.data("value");
      const selectedText = $firstItem.find("p").text();
      const selectedIcon = $firstItem.find(".select-img").attr("src");

      $(select)
        .find(".wallet-select-header .select-img")
        .attr("src", selectedIcon);
      $(select).find(".wallet-select-header p").text(selectedText);
    }

    $(select)
      .find(".wallet-select-header")
      .on("click", function (e) {
        e.stopPropagation();
        const $walletSelectBody = $(this).siblings(".wallet-select-body");
        const $selectIcon = $(this).find(".select-icon");

        $(".wallet-select-body")
          .not($walletSelectBody)
          .fadeOut()
          .siblings(".select-icon")
          .removeClass("rotate"); // Убираем поворот у других стрелок

        if ($walletSelectBody.is(":visible")) {
          $walletSelectBody.fadeOut();
          $selectIcon.removeClass("rotate"); // Убираем поворот
        } else {
          $walletSelectBody.fadeIn();
          $selectIcon.addClass("rotate"); // Добавляем поворот
        }
      });

    $(select)
      .find(".wallet-select-item")
      .on("click", function () {
        const selectedValue = $(this).data("value");
        const selectedText = $(this).find("p").text();
        const selectedIcon = $(this).find("img").attr("src");
        const $selectIcon = $(select).find(".select-icon");

        $(select)
          .find(".wallet-select-header .select-img")
          .attr("src", selectedIcon);
        $(select).find(".wallet-select-header p").text(selectedText);

        $(this).closest(".wallet-select-body").fadeOut();
        $selectIcon.removeClass("rotate");
      });
  }

  $(".payment-system-select").each(function () {
    initializeWalletSelect(this);
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".payment-system-select").length) {
      $(".wallet-select-body").fadeOut();
      $(".select-icon").removeClass("rotate"); // Убираем поворот при клике вне
    }
  });
});
$(document).ready(function () {
  $(".table-item-header").on("click", function () {
    const $inner = $(this).closest(".table-item").find(".table-item-inner");
    if ($inner.hasClass("open")) {
      $inner.removeClass("open");
      $(".open-indicator").css("transform", "rotate(0)");
    } else {
      $inner.addClass("open");
      $(".open-indicator").css("transform", "rotate(180deg)");
    }
  });
});
$(document).ready(function () {
  $("#deposits-btn").click(function () {
    $(".withdraw-history").hide();
    $(".deposite-history").fadeIn();
    $(".choice-part").fadeIn();
    $(".deposite-main-part").fadeIn();
    $(this).addClass("active");
    $("#withdrawals-btn").removeClass("active");
  });

  $("#withdrawals-btn").click(function () {
    $(".deposite-history").hide();
    $(".withdraw-history").fadeIn();
    $(this).addClass("active");
    $("#deposits-btn").removeClass("active");
  });
});
$(document).ready(function () {
  $(".withdraw-block").hide();
  $(".wallet-history-wrapper").hide();

  $(".deposite-btn").click(function () {
    if ($(this).hasClass("active")) {
      return;
    }

    $(".withdraw-block").hide();
    $(".wallet-history-wrapper").hide();
    $(".modal-close-btn").removeClass("history-close");
    $(".deposite-block").fadeIn();
    $(".deposite-btn").addClass("active");
    $(".withdraw-btn").removeClass("active");
    $(".wallet-history-btn").removeClass("active");
    $(".wallet-modal").removeClass("history");
  });

  $(".withdraw-btn").click(function () {
    if ($(this).hasClass("active")) {
      return;
    }

    $(".deposite-block").hide();
    $(".wallet-history-wrapper").hide();
    $(".modal-close-btn").removeClass("history-close");
    $(".withdraw-block").fadeIn();
    $(".withdraw-btn").addClass("active");
    $(".deposite-btn").removeClass("active");
    $(".wallet-history-btn").removeClass("active");
    $(".wallet-modal").removeClass("history");
  });

  $(".wallet-history-btn").click(function () {
    if ($(this).hasClass("active")) {
      return;
    }

    $(".deposite-block").hide();
    $(".withdraw-block").hide();
    $(".modal-close-btn").addClass("history-close");
    $(".wallet-history-wrapper").fadeIn();
    $(".wallet-history-btn").addClass("active");
    $(".deposite-btn").removeClass("active");
    $(".withdraw-btn").removeClass("active");
    $(".wallet-modal").addClass("history");
  });
});
$(document).ready(function () {
  $(".payments-btn").on("click", function () {
    const selectedValue = $(this).data("value");
    const selectedText = $(this).find("p").text();

    $(".wallet-select-header .select-img").attr(
      "src",
      $(this).find("img").attr("src")
    );
    $(".wallet-select-header p").text(selectedText);

    $(".choice-part").hide();

    $(".deposite-main-part").fadeIn();
  });
});

$(".close-btn").click(() => {
  $(".modal-layout").fadeOut();
  $(".popup").fadeOut();
});
$(".sign-in-btn").click(() => {
  $(".modal-layout").css("display", "flex");
  $(".auth-modal").fadeIn();
  $(".login-block").fadeIn();
  $(".register-block").hide();
  $(".auth-modal .btn-default").removeClass("active"); // Убираем активный класс у всех
  $(".btn-default:contains('Вход')").addClass("active"); // Устанавливаем активный класс
});
$(".sign-up-btn").click(() => {
  $(".modal-layout").css("display", "flex");
  $(".auth-modal").fadeIn();
  $(".register-block").fadeIn();
  $(".login-block").hide();

  // Установка активного класса для кнопки "Регистрация"
  $(".auth-modal .btn-default").removeClass("active"); // Убираем активный класс у всех
  $(".btn-default:contains('Регистрация')").addClass("active"); // Устанавливаем активный класс
});
$(".rules-btn").click(() => {
  $(".modal-layout").css("display", "flex");
  $(".chat-rule-modal").fadeIn();
});
$(".create-raffle-btn").click(() => {
  $(".modal-layout").css("display", "flex");
  $(".create-raffle-modal").fadeIn();
});
$(".referal-info-btn").click(() => {
  $(".modal-layout").css("display", "flex");
  $(".referal-system-modal").fadeIn();
});
$(".levels-info-btn").click(() => {
  $(".modal-layout").css("display", "flex");
  $(".achievements-modal").fadeIn();
});
$(".bonus-info-btn").click(() => {
  $(".modal-layout").css("display", "flex");
  $(".profile-bonus-modal").fadeIn();
});
$(".wallet-open-btn").click(() => {
  $(".modal-layout").css("display", "flex");
  $(".wallet-modal").fadeIn();
});
$(".raffle-confirm-btn").click(() => {
  $(".modal-layout").css("display", "flex");
  $(".popup").hide();
  $(".confirm-raffle-modal").fadeIn();
});
$(".forgot-password-btn").click(() => {
  $(".modal-layout").css("display", "flex");
  $(".popup").hide();
  $(".reset-password-modal").fadeIn();
});

$(".create-raffle-finish-btn").click(() => {
  $(".modal-layout").css("display", "flex");
  $(".popup").hide();
  $(".raffle-created-modal").fadeIn();
});
$(document).ready(function () {
  $(".register-type-btn").on("click", function () {
    $(".register-type-btn").removeClass("active");
    $(this).addClass("active");

    if ($(this).hasClass("active") && $(this).text() === "По логину") {
      $(".login-register-type").slideDown();
      $(".one-click-register").hide();
    } else {
      $(".login-register-type").hide();
      $(".one-click-register").slideDown();
    }
  });
});
$(document).ready(function () {
  $(".register-block").hide();
  $(".login-block").show();

  $(".btn-default").on("click", function () {
    if ($(this).text() === "Вход") {
      $(".register-block").hide();
      $(".login-block").slideDown();
      $(".btn-default").removeClass("active");
      $(this).addClass("active");
    } else if ($(this).text() === "Регистрация") {
      $(".login-block").hide();
      $(".register-block").slideDown();
      $(".btn-default").removeClass("active");
      $(this).addClass("active");
    }
  });
});
$(document).ready(function () {
  $(".faq-header").on("click", function () {
    const faqBody = $(this).next(".faq-body");
    const wrapper = $(this).closest(".faq-item");
    console.log(wrapper);
    if (faqBody.is(":visible")) {
      wrapper.css("grid-row", "span 1");
      faqBody.slideUp();
    } else {
      $(".faq-body:visible").slideUp();
      wrapper.css("grid-row", "span 3");
      faqBody.slideDown();
    }
  });
});
$(document).ready(function () {
  $(".bonus-detail-header").click(function () {
    const header = $(this);
    const body = header.next(".bonus-detail-body");
    const icon = header.find(".select-icon img");

    body.slideToggle();

    // Поворачиваем иконку
    if (body.is(":visible")) {
      icon.css("transform", "rotate(180deg)"); // Поворачиваем
    } else {
      icon.css("transform", "rotate(0deg)"); // Возвращаем в исходное положение
    }
  });
});

$(document).ready(function () {
  $(".full-menu-btn").click(function (e) {
    e.preventDefault();
    $(".full-mobile-menu").addClass("opened");
    $(".full-menu-layout").show();
  });

  $(".close-btn").click(function () {
    $(".full-mobile-menu").removeClass("opened");
    $(".full-menu-layout").hide();
  });
});
$(".profile-menu-btn").click(() => {
  $(".profile-menu-inner").slideToggle();
  $(".profile-menu-inner").css("display", "flex");
});
$(document).ready(function () {
  toastr.options = {
    closeButton: true, // Кнопка закрытия
    progressBar: true, // Прогресс-бар
    timeOut: "1000", // Время отображения (мс)
    extendedTimeOut: "1000", // Дополнительное время при наведении
    positionClass: "toast-top-right", // Позиция уведомления
  };
});
document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");

  setTimeout(function () {
    loader.style.display = "none";

    toastr.success(
      "<span class='icon-notif'><img src='./assets/icons/wallet-icon.svg' alt='Иконка'></span> Баланс пополнен на 500 <img src='./assets/icons/gold-coins.svg' alt='Иконка'>"
    );
    toastr.error(
      "<span class='icon-notif'><img src='./assets/icons/close-mini-icon.svg' alt='Иконка'></span> Вывод средств был отменен"
    );
  }, 1000);
});
