// main.js — compiled from main.ts
// To convert: rename to main.ts, add types, and run through tsc or esbuild

const site = {
  init(): void {
    this.bindNavigation();
    this.setExternalLinks();
  },

  bindNavigation(): void {
    const toggle = document.querySelector<HTMLButtonElement>("[data-nav-toggle]");
    const nav    = document.querySelector<HTMLElement>("[data-nav]");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target as Node) && !toggle.contains(e.target as Node)) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  },

  setExternalLinks(): void {
    document.querySelectorAll<HTMLAnchorElement>('a[href^="http"]').forEach((link) => {
      if (new URL(link.href).hostname !== window.location.hostname) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
    });
  },
};

document.addEventListener("DOMContentLoaded", () => site.init());
