const palettes = {
      classic: {
        bg: "#f8f8f8",
        text: "#333333",
        button: "#333333",
        hover: "#444444"
      },
      pink: {
        bg: "#fff0f5",
        text: "#4a0033",
        button: "#c71585",
        hover: "#9b145d"
      },
      blue: {
        bg: "#e6f0ff",
        text: "#001f3f",
        button: "#003366",
        hover: "#001f4d"
      },
      gold: {
        bg: "#fef9e7",
        text: "#7d6608",
        button: "#b7950b",
        hover: "#9a7d0a"
      },
      sage: {
        bg: "#f0f5f1",
        text: "#3e5642",
        button: "#7d9773",
        hover: "#6b8b63"
      },
      dark: {
        bg: "#121212",
        text: "#ffffff",
        button: "#2c2c2c",
        hover: "#444444"
      }
    };

    function applyPalette(name) {
      const palette = palettes[name];
      if (!palette) return;

      const body = document.getElementById("body");
      const buttons = document.querySelectorAll(".link-btn");

      body.style.backgroundColor = palette.bg;
      body.style.color = palette.text;

      buttons.forEach(btn => {
        btn.style.backgroundColor = palette.button;
        btn.style.color = "#ffffff";

        btn.addEventListener("mouseenter", () => {
          btn.style.backgroundColor = palette.hover;
        });
        btn.addEventListener("mouseleave", () => {
          btn.style.backgroundColor = palette.button;
        });
      });
    }

    // Aplicar paleta padrão ao carregar
    window.addEventListener("DOMContentLoaded", () => {
      applyPalette('classic');
    });