
/*
|--------------------------------------------------------------------------
| KOMPONEN NAVBAR
|--------------------------------------------------------------------------
*/


export function renderNavbar() {
    return `
        <nav class="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
            <div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">

                <!-- Logo -->
                <a href="#" class="flex items-center gap-3">
                    <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200">
                        <i data-lucide="briefcase-business" class="h-5 w-5"></i>
                    </div>

                    <span class="text-xl font-extrabold tracking-tight text-slate-900">
                        Talent<span class="text-blue-600">Hub</span>
                    </span>
                </a>

                <!-- Navigasi Desktop -->
                <div class="hidden items-center gap-9 text-sm font-semibold lg:flex">
                    <a href="#"
                    data-nav-link
                    class="text-slate-500 transition duration-200 hover:text-blue-600">
                        Beranda
                    </a>

                    <a href="#roles"
                    data-nav-link
                    class="text-slate-500 transition duration-200 hover:text-blue-600">
                        Karier
                    </a>
                </div>

                <!-- Tombol Desktop -->
                <a href="#roles"
                    class="hidden items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700 lg:inline-flex">
                    <span>Gabung Bersama Kami</span>
                    <i data-lucide="arrow-up-right" class="h-4 w-4"></i>
                </a>

                <!-- Tombol Hamburger Mobile -->
                <button
                    id="mobile-menu-toggle"
                    type="button"
                    class="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-blue-50 hover:text-blue-600 lg:hidden"
                    aria-label="Buka menu navigasi"
                    aria-expanded="false"
                    aria-controls="mobile-menu"
                >
                    <i data-lucide="menu" class="h-5 w-5"></i>
                </button>

            </div>

            <!-- Menu Mobile -->
            <div id="mobile-menu" class="hidden border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
                <div class="flex flex-col gap-1 text-sm font-semibold">

                    <a href="#"
                        data-nav-link
                        class="rounded-lg px-4 py-3 text-slate-500 transition duration-200 hover:bg-blue-50 hover:text-blue-600">
                            Beranda
                    </a>

                    <a href="#roles"
                        data-nav-link
                        class="rounded-lg px-4 py-3 text-slate-500 transition duration-200 hover:bg-blue-50 hover:text-blue-600">
                            Karier
                    </a>

                    <a href="#roles"
                        class="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-bold text-white transition hover:bg-blue-700">
                        Gabung Bersama Kami
                        <i data-lucide="arrow-up-right" class="h-4 w-4"></i>
                    </a>

                </div>
            </div>
        </nav>
    `;
}

/*
|--------------------------------------------------------------------------
| KOMPONEN HERO
|--------------------------------------------------------------------------
*/

export function renderHero() {
    return `
        <section class="relative overflow-hidden bg-slate-950 text-white">

            <!-- Dekorasi -->
            <div class="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>
            <div class="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl"></div>

            <div class="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:py-24">

                <!-- Konten Hero -->
                <div class="max-w-2xl">

                    <div class="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-bold tracking-wider text-blue-300">
                        <span class="h-2 w-2 rounded-full bg-blue-400"></span>
                        PELUANG KARIER MENANTIMU
                    </div>

                    <h1 class="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                        Temukan Potensimu.
                        <span class="mt-2 block text-blue-400">
                            Bangun Masa Depanmu.
                        </span>
                    </h1>

                    <p class="mt-7 max-w-xl text-justify leading-8 text-slate-300 sm:text-lg">
                        Setiap perjalanan hebat dimulai dari sebuah kesempatan.
                        Temukan pekerjaan yang sesuai dengan kemampuan,
                        minat, dan impian kariermu bersama TalentHub.
                    </p>

                    <div class="mt-9 flex flex-wrap items-center gap-4">
                        <a href="#roles"
                            class="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/40 transition hover:-translate-y-1 hover:bg-blue-500">
                            Jelajahi Lowongan
                            <i data-lucide="arrow-down" class="h-4 w-4"></i>
                        </a>

                        <div class="flex items-center gap-2 text-sm text-slate-400">
                            <i data-lucide="sparkles" class="h-4 w-4 text-blue-400"></i>
                            Temukan peluang terbaikmu
                        </div>
                    </div>

                </div>

                <!-- Kartu Dekoratif Hero -->
                <div class="relative mx-auto hidden w-full max-w-md lg:block">

                    <div class="absolute -left-7 -top-7 h-24 w-24 rounded-3xl border border-blue-400/20 bg-blue-400/10"></div>

                    <div class="relative rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl shadow-blue-950/30 backdrop-blur-xl">

                        <div class="mb-6 flex items-center justify-between">
                            <div>
                                <p class="text-sm font-semibold text-white">
                                    Peluang untukmu
                                </p>
                                <p class="mt-1 text-xs text-slate-400">
                                    Mulai perjalanan kariermu
                                </p>
                            </div>

                            <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                                <i data-lucide="target" class="h-6 w-6"></i>
                            </div>
                        </div>

                        <div class="space-y-3">

                            <div class="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                                <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                                    <i data-lucide="code" class="h-5 w-5"></i>
                                </div>
                                <div class="flex-1">
                                    <p class="text-sm font-bold">Teknologi</p>
                                    <p class="mt-1 text-xs text-slate-400">Bangun inovasi digital</p>
                                </div>
                                <i data-lucide="arrow-up-right" class="h-4 w-4 text-slate-400"></i>
                            </div>

                            <div class="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                                <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/20 text-purple-300">
                                    <i data-lucide="palette" class="h-5 w-5"></i>
                                </div>
                                <div class="flex-1">
                                    <p class="text-sm font-bold">Desain</p>
                                    <p class="mt-1 text-xs text-slate-400">Wujudkan ide kreatif</p>
                                </div>
                                <i data-lucide="arrow-up-right" class="h-4 w-4 text-slate-400"></i>
                            </div>

                            <div class="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                                <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
                                    <i data-lucide="chart-no-axes-combined" class="h-5 w-5"></i>
                                </div>
                                <div class="flex-1">
                                    <p class="text-sm font-bold">Bisnis & Strategi</p>
                                    <p class="mt-1 text-xs text-slate-400">Kembangkan potensi bisnis</p>
                                </div>
                                <i data-lucide="arrow-up-right" class="h-4 w-4 text-slate-400"></i>
                            </div>

                        </div>

                        <div class="mt-5 rounded-2xl bg-blue-600 p-4">
                            <p class="text-xs font-medium text-blue-100">
                                Langkah kecil hari ini,
                            </p>
                            <p class="mt-1 text-lg font-extrabold">
                                Kesempatan besar esok hari.
                            </p>
                        </div>

                    </div>

                    <div class="absolute -bottom-6 -right-6 h-20 w-20 rounded-3xl border border-blue-400/20 bg-blue-400/10"></div>

                </div>

            </div>
        </section>
    `;
}


/*
|--------------------------------------------------------------------------
| KOMPONEN SECTION LOWONGAN
|--------------------------------------------------------------------------
*/

export function renderRoleSection() {
    return `
        <section id="roles" class="py-16 sm:py-20 lg:py-24">

            <div class="mx-auto max-w-7xl px-5 sm:px-8">

                <!-- Judul Section -->
                <div class="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

                    <div class="max-w-2xl">
                        <div class="mb-3 inline-flex items-center gap-2 text-sm font-bold text-blue-600">
                            <span class="h-2 w-2 rounded-full bg-blue-600"></span>
                            TEMUKAN PELUANGMU
                        </div>

                        <h2 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                            Jelajahi Lowongan
                            <span class="text-blue-600">Pekerjaan</span>
                        </h2>

                        <p class="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
                            Pilih departemen yang sesuai dengan minat dan keahlianmu.
                            Siapa tahu, kesempatan terbaikmu ada di sini.
                        </p>
                    </div>

                    <div class="inline-flex w-fit items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50 px-5 py-3">
                        <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                            <i data-lucide="briefcase-business" class="h-5 w-5"></i>
                        </div>

                        <div>
                            <p id="job-count" class="text-xl font-extrabold text-slate-900">0</p>
                            <p class="text-xs font-medium text-slate-500">Lowongan tersedia</p>
                        </div>
                    </div>

                </div>

                <!-- Filter Departemen -->
                <div class="mb-9 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">

                    <div class="mb-4 flex items-center gap-2">
                        <i data-lucide="sliders-horizontal" class="h-4 w-4 text-blue-600"></i>
                        <h3 class="text-sm font-bold text-slate-800">
                            Pilih Departemen
                        </h3>
                    </div>

                    <div
                        id="department-filters"
                        class="flex flex-nowrap gap-2.5 overflow-x-auto overscroll-x-contain scroll-smooth
                        pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    </div>


                </div>

                <!-- Daftar Lowongan -->
                <div id="job-list" class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
                </div>

            </div>
        </section>
    `;
}


/*
|--------------------------------------------------------------------------
| KOMPONEN FILTER DEPARTEMEN
|--------------------------------------------------------------------------
*/

export function renderDepartmentFilters(departments, selectedDepartment) {
    return departments.map(department => `
        <button
            type="button"
            data-department="${department}"
            aria-pressed="${selectedDepartment === department}"
            class="shrink-0 rounded-xl border px-4 py-2.5 text-sm font-semibold transition duration-200
            ${selectedDepartment === department
            ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-100"
            : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
        }"
        >
            ${department}
        </button>
    `).join("");
}


/*
|--------------------------------------------------------------------------
| KOMPONEN KARTU LOWONGAN
|--------------------------------------------------------------------------
*/

export function renderJobCard(job) {
    return `
        <article class="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/60">

            <!-- Bagian Atas -->
            <div class="mb-5 flex items-start justify-between gap-3">

                <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <i data-lucide="briefcase-business" class="h-6 w-6"></i>
                </div>

                <span class="rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-600">
                    ${job.department}
                </span>

            </div>

            <!-- Informasi Pekerjaan -->
            <div class="flex-1">

                <h3 class="text-lg font-extrabold leading-snug text-slate-900 transition group-hover:text-blue-600">
                    ${job.title}
                </h3>

                <p class="mt-3 text-sm leading-7 text-slate-500 text-justify">
                    ${job.description}
                </p>

            </div>

            <!-- Informasi Tambahan -->
            <div class="mt-6 flex flex-wrap gap-2">

                <span class="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600">
                    <i data-lucide="map-pin" class="h-3.5 w-3.5 text-blue-500"></i>
                    ${job.location}
                </span>

                <span class="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600">
                    <i data-lucide="clock" class="h-3.5 w-3.5 text-blue-500"></i>
                    ${job.type}
                </span>

            </div>

            <!-- Bagian Bawah -->
            <div class="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

                <span class="text-xs font-bold text-slate-500">
                    ${job.level}
                </span>

                <span class="text-xs font-medium text-slate-400">
                    ${job.posted}
                </span>

            </div>

        </article>
    `;
}


/*
|--------------------------------------------------------------------------
| KOMPONEN EMPTY STATE
|--------------------------------------------------------------------------
*/

export function renderEmptyState() {
    return `
        <div class="col-span-full flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">

            <div class="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-50 text-blue-600">
                <i data-lucide="search-x" class="h-9 w-9"></i>
            </div>

            <h3 class="text-xl font-extrabold text-slate-900">
                Belum Ada Lowongan
            </h3>

            <p class="mt-3 max-w-md text-sm leading-7 text-slate-500">
                Saat ini belum tersedia lowongan pekerjaan pada departemen ini.
                Jangan khawatir, masih ada banyak peluang menarik di departemen lainnya.
            </p>

            <button
                id="reset-filter"
                type="button"
                class="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-100 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
                <i data-lucide="refresh-ccw" class="h-4 w-4"></i>
                Lihat Semua Lowongan
            </button>

        </div>
    `;
}
