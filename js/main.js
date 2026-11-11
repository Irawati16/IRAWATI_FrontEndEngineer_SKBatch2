
/*
|--------------------------------------------------------------------------
| IMPORT DATA
|--------------------------------------------------------------------------
*/

import { departments, roles } from "./data.js";


/*
|--------------------------------------------------------------------------
| IMPORT KOMPONEN
|--------------------------------------------------------------------------
*/

import {
    renderNavbar,
    renderHero,
    renderRoleSection,
    renderDepartmentFilters,
    renderJobCard,
    renderEmptyState
} from "./components.js";


/*
|--------------------------------------------------------------------------
| STATE APLIKASI
|--------------------------------------------------------------------------
*/

// Departemen yang dipilih pengguna
let selectedDepartment = "Semua Departemen";


/*
|--------------------------------------------------------------------------
| RENDER SELURUH HALAMAN
|--------------------------------------------------------------------------
*/

function renderApp() {
    const app = document.getElementById("app");

    // Menampilkan seluruh komponen utama
    app.innerHTML = `
        ${renderNavbar()}
        ${renderHero()}
        ${renderRoleSection()}
    `;

    // Menampilkan filter dan daftar lowongan
    renderRoleExplorer();

    // Mengaktifkan ikon Lucide
    lucide.createIcons();
}


/*
|--------------------------------------------------------------------------
| RENDER ROLE EXPLORER
|--------------------------------------------------------------------------
*/

function renderRoleExplorer() {
    const filterContainer = document.getElementById("department-filters");
    const jobContainer = document.getElementById("job-list");
    const jobCount = document.getElementById("job-count");

    // Pastikan elemen tersedia
    if (!filterContainer || !jobContainer || !jobCount) {
        console.error("Elemen Role Explorer tidak ditemukan.");
        return;
    }

    // Menampilkan tombol filter departemen
    filterContainer.innerHTML = renderDepartmentFilters(
        departments,
        selectedDepartment
    );

    // Memfilter lowongan berdasarkan departemen
    const filteredRoles = selectedDepartment === "Semua Departemen"
        ? roles
        : roles.filter(role => role.department === selectedDepartment);

    // Memperbarui jumlah lowongan
    jobCount.textContent = filteredRoles.length;

    // Menampilkan kartu pekerjaan atau Empty State
    if (filteredRoles.length === 0) {

        jobContainer.innerHTML = renderEmptyState();

    } else {

        jobContainer.innerHTML = filteredRoles
            .map(role => renderJobCard(role))
            .join("");

    }

    // Memperbarui ikon setelah konten dirender
    lucide.createIcons();
}


/*
|--------------------------------------------------------------------------
| EVENT LISTENER FILTER DEPARTEMEN
|--------------------------------------------------------------------------
*/

document.addEventListener("click", function (event) {

    // Memeriksa tombol departemen yang diklik
    const departmentButton = event.target.closest("[data-department]");

    if (departmentButton) {

        selectedDepartment = departmentButton.dataset.department;

        renderRoleExplorer();
    }

    // Mengembalikan tampilan ke seluruh lowongan
    const resetButton = event.target.closest("#reset-filter");

    if (resetButton) {

        selectedDepartment = "Semua Departemen";

        renderRoleExplorer();
    }

});

/*
|--------------------------------------------------------------------------
| ACTIVE NAVIGATION
|--------------------------------------------------------------------------
*/

document.addEventListener("click", function (event) {

    const navLink = event.target.closest("[data-nav-link]");

    if (!navLink) return;

    // Menghapus status aktif dari semua menu
    document.querySelectorAll("[data-nav-link]").forEach(link => {
        link.classList.remove("text-blue-600");
        link.classList.add("text-slate-500");
    });

    // Mengaktifkan menu yang diklik
    document.querySelectorAll(`[data-nav-link][href="${navLink.getAttribute("href")}"]`)
        .forEach(link => {
            link.classList.remove("text-slate-500");
            link.classList.add("text-blue-600");
        });

});

/*
|--------------------------------------------------------------------------
| EVENT LISTENER MOBILE NAVBAR
|--------------------------------------------------------------------------
*/

document.addEventListener("click", function (event) {

    const menuButton = event.target.closest("#mobile-menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (!mobileMenu) return;

    // Membuka dan menutup menu mobile
    if (menuButton) {

        const isMenuClosed = mobileMenu.classList.contains("hidden");

        mobileMenu.classList.toggle("hidden");

        menuButton.setAttribute("aria-expanded", isMenuClosed);
        menuButton.setAttribute(
            "aria-label",
            isMenuClosed ? "Tutup menu navigasi" : "Buka menu navigasi"
        );

        menuButton.innerHTML = isMenuClosed
            ? '<i data-lucide="x" class="h-5 w-5"></i>'
            : '<i data-lucide="menu" class="h-5 w-5"></i>';

        lucide.createIcons();

        return;
    }

    // Menutup menu setelah salah satu navigasi diklik
    const menuLink = event.target.closest("#mobile-menu a");

    if (menuLink) {

        mobileMenu.classList.add("hidden");

        const toggleButton = document.getElementById("mobile-menu-toggle");

        toggleButton.setAttribute("aria-expanded", "false");
        toggleButton.setAttribute("aria-label", "Buka menu navigasi");

        toggleButton.innerHTML =
            '<i data-lucide="menu" class="h-5 w-5"></i>';

        lucide.createIcons();
    }

});

/*
|--------------------------------------------------------------------------
| JALANKAN APLIKASI
|--------------------------------------------------------------------------
*/

renderApp();
