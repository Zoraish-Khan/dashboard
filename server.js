const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

const PORT = 8000;
const HOST = '127.0.0.1';

app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'default',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public/'));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views/');


// index page
app.get('/', (req, res) => {
    res.render('index', {
        title: "Index Page",
        js: [
            "https://cdn.jsdelivr.net/npm/apexcharts",
            "/js/apexchart-data.js"
        ]
    });
});

app.get('/index-landing', (req, res) => {
    res.render('index-landing',
        {
            title: "Landing",
            layout: "landing-page",
        });
});

app.get('/index-crypto', (req, res) => {
    res.render('index-crypto',
        {
            title: "Index Crypto",
            js: [
                "https://cdn.jsdelivr.net/npm/apexcharts",
                "./js/sparkline-apexchart-crypto.js",
                // amchart js
                "https://cdn.amcharts.com/lib/5/index.js",
                "https://cdn.amcharts.com/lib/5/xy.js",
                "https://cdn.amcharts.com/lib/5/stock.js",
                "https://cdn.amcharts.com/lib/5/themes/Animated.js",

                "./js/amchart/stock-live.js",


            ]
        });
});

app.get('/index-social', (req, res) => {
    res.render('index-social',
        {
            title: "Index Social",
            js: [
                "https://cdn.jsdelivr.net/npm/apexcharts",
                "/js/social-page-apexchart-data.js",
                // amchart js
                "https://cdn.amcharts.com/lib/5/index.js",
                "https://cdn.amcharts.com/lib/5/xy.js",
                "https://cdn.amcharts.com/lib/5/themes/Animated.js",

                "/js/amchart/column-bars-init.js"
            ]
        });
});

app.get('/index-project', (req, res) => {
    res.render('index-project', {
        fullCalendar: false,
        title: "Index Project",
        js: [
            "https://cdn.jsdelivr.net/npm/apexcharts",
            "https://cdn.jsdelivr.net/npm/jsvectormap",
            "/js/apexchart-data.js",
            "/js/js-vector-map/world-merc.js",
            "/js/custom-world-map.js"
        ],
        css: [
            "https://cdn.jsdelivr.net/npm/jsvectormap/dist/css/jsvectormap.min.css"
        ]
    });
});

app.get('/index-crm', (req, res) => {
    res.render('index-crm', {
        fullCalendar: true,
        title: "Index CRM",
        js: [
            "https://cdn.jsdelivr.net/npm/apexcharts",
            "/js/crm-page-apexchart-data.js",
            "https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/index.global.min.js",
            "/js/crm-page-fullcalendar.js"
        ]
    });
});

app.get('/calendar', (req, res) => {
    res.render('calendar', {
        fullCalendar: true,
        crmPageApexchartIntitial: true,
        title: "Calendar",
        js: [
            "https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/index.global.min.js",
            "/js/calendar.js"
        ]
    });
});

app.get('/chat', (req, res) => {
    res.render('chat', { title: "Chat" });
});

app.get('/mailbox', (req, res) => {
    res.render('mailbox', { title: "Mailbox" });
});

app.get('/products', (req, res) => {
    res.render('products',
        {
            title: "Products",

        });
});

app.get('/product-details', (req, res) => {
    res.render('product-details',
        {
            title: "Product Details",
            css: [
                "https://unpkg.com/swiper/swiper-bundle.min.css"
            ],
            js: [
                "https://unpkg.com/swiper/swiper-bundle.min.js",
                "/js/product-detail-swiper.js"
            ]

        });
});

app.get('/orders', (req, res) => {
    res.render('orders',
        {
            title: "Orders",

            js: [
                "https://unpkg.com/gridjs/dist/gridjs.umd.js",
                "/js/order-datatable-init.js"
            ]

        });
});

app.get('/customers', (req, res) => {
    res.render('customers',
        {
            title: "Customers",

        });
});

app.get('/cart', (req, res) => {
    res.render('cart',
        {
            title: "Cart",

        });
});

app.get('/checkout', (req, res) => {
    res.render('checkout',
        {
            title: "Checkout",
            js: [
                "/js/checkout-page-wizard-form.js",
            ]

        });
});

app.get('/sellers', (req, res) => {
    res.render('sellers',
        {
            title: "Sellers",
            js: [
                "https://cdn.jsdelivr.net/npm/apexcharts",
                "/js/sellers-chart.js",
            ]
        });
});
app.get('/invoice-list', (req, res) => {
    res.render('invoice-list',
    {
        title: "Invoice List",
        js: [
            
        ]
    });
});
app.get('/invoice-detail', (req, res) => {
    res.render('invoice-detail',
    {
        title: "Invoice Detail",
        js: [
            
        ]
    });
});

app.get('/blog', (req, res) => {
    res.render('blog',
    {
        title: "Blog",
        js: [
            
        ]
    });
});
app.get('/blog-detail', (req, res) => {
    res.render('blog-detail',
    {
        title: "Blog",
        js: [
            
        ]
    });
});

app.get('/job-grid', (req, res) => {
    res.render('job-grid',
        {
            title: "Job grid",
            js: [
               
            ]

        });
});
app.get('/job-list', (req, res) => {
    res.render('job-list',
        {
            title: "Job List",
            js: [
               
            ]

        });
});
app.get('/job-post', (req, res) => {
    res.render('job-post',
        {
            title: "Job Post",
            js: [
                "https://cdn.jsdelivr.net/npm/choices.js/public/assets/scripts/choices.min.js",
                "/js/choice-init.js"
            ]

        });
});
app.get('/job-detail', (req, res) => {
    res.render('job-detail',
        {
            title: "Job Detail",
            js: [
                "https://cdn.jsdelivr.net/npm/choices.js/public/assets/scripts/choices.min.js",
                "/js/choice-init.js"
            ]

        });
});
app.get('/project-list', (req, res) => {
    res.render('project-list',
        {
            title: "Project List",
            js: [
                "/js/bsTooltipEnabled.js"
            ]
        });
});

app.get('/project-overview', (req, res) => {
    res.render('project-overview',
        {
            title: "Project Overview",
            js: [
                "https://cdn.jsdelivr.net/npm/apexcharts",
                "/js/project-overview-apexchart.js"
            ]
        });
});

app.get('/project-create', (req, res) => {
    res.render('project-create',
        {
            title: "Project Create",
            css: [
                "https://unpkg.com/dropzone@5/dist/min/dropzone.min.css",
            ],
            js: [
                "https://unpkg.com/dropzone@5/dist/min/dropzone.min.js",
                "/js/project-create-dropzone.js"
            ]
        });
});

app.get('/kanban-board', (req, res) => {
    res.render('kanban-board',
        {
            title: "Kanban Board",
            js: [
                "/js/dragula.min.js",
                "/js/dragula-init.js"
            ]
        });
});
app.get('/kanban-list', (req, res) => {
    res.render('kanban-list',
        {
            title: "Kanban List",
            js: [
                "https://cdn.jsdelivr.net/npm/apexcharts",
                "/js/kanban-list.js",
                "/js/dragula.min.js",
                "/js/dragula-init.js"
            ]
        });
});
app.get('/kanban-detail', (req, res) => {
    res.render('kanban-detail',
        {
            title: "Kanban Detail",
            js: [
                "https://cdn.jsdelivr.net/npm/apexcharts",
                "/js/kanban-list.js",
                "/js/dragula.min.js",
                "/js/dragula-init.js"
            ]
        });
});
// authentication pages
app.get('/signin-basic', (req, res) => {
    res.render('signin-basic',
        {
            title: "Signin Basic",
            layout: "authentication"
        });
});

app.get('/signin-full-size', (req, res) => {
    res.render('signin-full-size',
        {
            title: "Signin Full Size",
            layout: "authentication",
            js: [
                "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js",
                "/js/authenticaon-page-particle.js"
            ]
        });
});


app.get('/signup-basic', (req, res) => {
    res.render('signup-basic',
        {
            title: "Signup Basic",
            layout: "authentication",

        });
});

app.get('/signup-full-size', (req, res) => {
    res.render('signup-full-size',
        {
            title: "Signup Full Size",
            layout: "authentication",

        });
});


app.get('/pass-reset-basic', (req, res) => {
    res.render('pass-reset-basic',
        {
            title: "Password Reset Basic",
            layout: "authentication",

        });
});

app.get('/pass-reset-full-size', (req, res) => {
    res.render('pass-reset-full-size',
        {
            title: "Password Reset Full Size",
            layout: "authentication",
            js: [
                "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js",
                "/js/authenticaon-page-particle.js"
            ]
        });
});

app.get('/pass-create-basic', (req, res) => {
    res.render('pass-create-basic',
        {
            title: "Password Create Basic",
            layout: "authentication",
        });
});

app.get('/pass-reset-full-size', (req, res) => {
    res.render('pass-reset-full-size',
        {
            title: "Password Reset Full Size",
            layout: "authentication",
            js: [
                "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js",
                "/js/authenticaon-page-particle.js"
            ]
        });
});


app.get('/logout-basic', (req, res) => {
    res.render('logout-basic',
        {
            title: "Logout Basic",
            layout: "authentication",
            js: [
                "https://cdn.lordicon.com/xdjxvujz.js",
            ]
        });
});

app.get('/logout-full-size', (req, res) => {
    res.render('logout-full-size',
        {
            title: "Logout Full Size",
            layout: "authentication",
            js: [
                "https://cdn.lordicon.com/xdjxvujz.js",
                "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js",
                "/js/authenticaon-page-particle.js"
            ]
        });
});

app.get('/error-404', (req, res) => {
    res.render('error-404',
        {
            title: "Error 404",
            layout: "authentication",
        });
});

app.get('/error-500', (req, res) => {
    res.render('error-500',
        {
            title: "Error 500",
            layout: "authentication",
        });
});

app.get('/offline', (req, res) => {
    res.render('offline',
        {
            title: "Offline Page",
            layout: "authentication",
        });
});
// end authentication pages

app.get('/starter-page', (req, res) => {
    res.render('starter-page',
        {
            title: "Starter",

        });
});
app.get('/profile', (req, res) => {
    res.render('profile',
        {
            title: "Profile",

        });
});

app.get('/profile-setting', (req, res) => {
    res.render('profile-setting',
        {
            title: "Profile",

        });
});

app.get('/team', (req, res) => {
    res.render('team',
        {
            title: "Team",

        });
});

app.get('/timeline', (req, res) => {
    res.render('timeline',
        {
            title: "Timeline",

        });
});

app.get('/faq', (req, res) => {
    res.render('faq',
        {
            title: "Faq",

        });
});

app.get('/pricing', (req, res) => {
    res.render('pricing',
        {
            title: "Pricing",

        });
});

app.get('/gallery', (req, res) => {
    res.render('gallery',
        {
            title: "Gallery",
            css: [
                "https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css"
            ],
            js: [
                "https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js",
                "https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.js",
                "/js/glightbox-initial.js"
            ]

        });
});

app.get('/maintenance', (req, res) => {
    res.render('maintenance',
        {
            title: "Maintenance",
            layout: "authentication"

        });
});

app.get('/coming-soon', (req, res) => {
    res.render('coming-soon',
        {
            title: "Coming Soon",
            layout: "authentication",
            js: [
                "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js",
                "/js/authenticaon-page-particle.js"
            ]

        });
});
app.get('/rating', (req, res) => {
    res.render('rating',
        {
            title: "Rating",
            js:[ 
                "/js/rater.js",
                "/js/rater-init.js"
        ]
            

        });
});
app.get('/tree', (req, res) => {
    res.render('tree',
        {
            title: "Tree",

        });
});

app.get('/search-result', (req, res) => {
    res.render('search-result',
        {
            title: "Search Result",
        });
});

app.get('/alerts', (req, res) => {
    res.render('alerts',
        {
            title: "Alert",
            js: [
                "/js/bs-alerts.js"
            ]
        });
});


app.get('/badges', (req, res) => {
    res.render('badges',
        {
            title: "Badges",

        });
});

app.get('/buttons', (req, res) => {
    res.render('buttons',
        {
            title: "Buttons",

        });
});

app.get('/cards', (req, res) => {
    res.render('cards',
        {
            title: "Cards",

        });
});

app.get('/dropdown', (req, res) => {
    res.render('dropdown',
        {
            title: "Dropdowns",

        });
});

app.get('/images', (req, res) => {
    res.render('images',
        {
            title: "Images",

        });
});

app.get('/tabs', (req, res) => {
    res.render('tabs',
        {
            title: "Tabs",
            js: [
                "https://cdn.lordicon.com/xdjxvujz.js",
                "/js/stepper-tab.js",
            ],
        });
});

app.get('/accordions', (req, res) => {
    res.render('accordions',
        {
            title: "Accordions",

        });
});

app.get('/modals', (req, res) => {
    res.render('modals',
        {
            title: "Modals",
            js: [
                "/js/bsTooltipEnabled.js",
            ]
        });
});
app.get('/navbars', (req, res) => {
    res.render('navbars',
        {
            title: "Navbars",
            js: [
               
            ]
        });
});

app.get('/offcanvas', (req, res) => {
    res.render('offcanvas',
        {
            title: "Offcanvas",

        });
});

app.get('/placeholder', (req, res) => {
    res.render('placeholder',
        {
            title: "Placeholder",

        });
});

app.get('/progress', (req, res) => {
    res.render('progress',
        {
            title: "progress",

        });
});
app.get('/notification', (req, res) => {
    res.render('notification',
        {
            title: "Notification",

        });
});

app.get('/media-object', (req, res) => {
    res.render('media-object',
        {
            title: "Media Object",

        });
});

app.get('/embed-video', (req, res) => {
    res.render('embed-video',
        {
            title: "Embed Video",

        });
});

app.get('/typography', (req, res) => {
    res.render('typography',
        {
            title: "Typography",

        });
});


app.get('/list', (req, res) => {
    res.render('list',
        {
            title: "List",

        });
});

app.get('/general', (req, res) => {
    res.render('general',
        {
            title: "General",

        });
});


app.get('/ribbons', (req, res) => {
    res.render('ribbons',
        {
            title: "Ribbons",

        });
});

app.get('/utilities', (req, res) => {
    res.render('utilities',
        {
            title: "Utilities",
            css: [
                "//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css"
            ],

            js: [
                "//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js",
                "./js/highlight-js/hl-init.js",


            ],
        });
});

app.get('/sweet-alerts', (req, res) => {
    res.render('sweet-alerts',
        {
            title: "Sweet Alert",
            css: [
                "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
            ],
            js: [
                "/js/sweet-alert-initial.js",
                "https://cdn.jsdelivr.net/npm/sweetalert2@11.4.26/dist/sweetalert2.all.min.js",

            ]
        });
});

app.get('/animation', (req, res) => {
    res.render('animation',
        {
            title: "Animation",
            css: [
                "https://unpkg.com/aos@2.3.1/dist/aos.css"
            ],
            js: [
                "https://unpkg.com/aos@2.3.1/dist/aos.js",
                "/js/aos-initial.js"
            ]
        });
});

app.get('/swipers', (req, res) => {
    res.render('swipers',
        {
            title: "Swipers",
            css: [
                "https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"
            ],
            js: [
                "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js",
                "/js/swipers-initial.js"
            ]
        });
});

app.get('/scrollspy', (req, res) => {
    res.render('scrollspy',
        {
            title: "Scrollspy",
            js: [
                "/js/scrollspy.js"
            ]
        });
});

app.get('/widgets', (req, res) => {
    res.render('widgets',
        {
            title: "Widgets",
            js: [
                "https://cdn.jsdelivr.net/npm/apexcharts",
                "https://cdn.jsdelivr.net/npm/jsvectormap",
                "/js/apexchart-data.js",
                "/js/js-vector-map/world-merc.js",
                "/js/custom-world-map.js"
            ],
            css: [
                "https://cdn.jsdelivr.net/npm/jsvectormap/dist/css/jsvectormap.min.css"
            ]
        });
});

app.get('/form-elements', (req, res) => {
    res.render('form-elements',
        {
            title: "Form Elements",
        });
});

app.get('/form-select', (req, res) => {
    res.render('form-select',
        {
            title: "Form Select",
        });
});

app.get('/checkbox-radios', (req, res) => {
    res.render('checkbox-radios',
        {
            title: "Checkbox Radio",
        });
});

app.get('/input-mask', (req, res) => {
    res.render('input-mask',
        {
            title: "Input Mask",
            js: [
                "https://cdn.jsdelivr.net/npm/cleave.js@1.6.0/dist/cleave.min.js",
                "/js/cleave-input-initial.js",
            ]
        });
});

app.get('/form-advanced', (req, res) => {
    res.render('form-advanced',
        {
            title: "Form Advanced",
            css: [

                "https://unpkg.com/dropzone@5/dist/min/dropzone.min.css",
                "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
                // color picker css 
                "https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/themes/classic.min.css",
                "https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/themes/monolith.min.css",
                "https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/themes/nano.min.css",
            ],
            js: [
                "https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/pickr.min.js",
                "https://unpkg.com/dropzone@5/dist/min/dropzone.min.js",
                "https://cdn.jsdelivr.net/npm/flatpickr",
                "/js/form-advanced-flatpickr-init.js",
                "/js/dropzone-initial.js",
                "/js/number-spin.js",
                "/js/colorpickr-init.js"
            ]
        });
});

app.get('/form-validation', (req, res) => {
    res.render('form-validation',
        {
            title: "Form Validation",
            js: [
                "/js/bs-form-validation.js",
            ]
        });
});

app.get('/form-wizard', (req, res) => {
    res.render('form-wizard',
        {
            title: "Form Wizard",
            js: [
                "/js/form-wizard.js",
            ]
        });
});

app.get('/editors', (req, res) => {
    res.render('editors',
        {
            title: "Editors",

            js: [
                "https://cdn.quilljs.com/1.3.6/quill.js",
                "/js/quills-editors-init.js",
            ]
        });
});


app.get('/file-upload', (req, res) => {
    res.render('file-upload',
        {
            title: "File Upload",
            css: [
                "https://unpkg.com/dropzone@5/dist/min/dropzone.min.css"
            ],
            js: [
                "https://unpkg.com/dropzone@5/dist/min/dropzone.min.js",
                "/js/file-upload-init.js",
            ]
        });
});

app.get('/form-layout', (req, res) => {
    res.render('form-layout',
        {
            title: "File Layout",

        });
});

app.get('/table-basic', (req, res) => {
    res.render('table-basic',
        {
            title: "Table Basic",

        });
});


app.get('/table-grid', (req, res) => {
    res.render('table-grid',
        {
            title: "Table Grid",

            js: [
                "https://unpkg.com/gridjs/dist/gridjs.umd.js",
                "/js/grid-js-table/gridjs-tabledata.js"
            ]
        });
});

app.get('/table-list-js', (req, res) => {
    res.render('table-list-js',
        {
            title: "Table List",

            js: [
                "/js/sortablejs.js",
                "/js/table-list-init.js"
            ]
        });
});

app.get('/apex-line-chart', (req, res) => {
    res.render('apex-line-chart',
        {
            title: "Apex Line Chart",

            js: [
                "https://cdn.jsdelivr.net/npm/apexcharts",
                "/js/apexchart/irregular-data-series.js",
                "/js/apexchart/line/line-initial.js"
            ]
        });
});

app.get('/apex-area-chart', (req, res) => {
    res.render('apex-area-chart',
        {
            title: "Apex Area Chart",

            js: [
                "https://cdn.jsdelivr.net/npm/apexcharts",
                "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js",
                "/js/apexchart/apex-stock-prices.js",
                "/js/apexchart/github-data.js",
                "/js/apexchart/irregular-data-series.js",
                "/js/apexchart/area/area-initial.js"
            ]
        });
});

app.get('/apex-column-chart', (req, res) => {
    res.render('apex-column-chart',
        {
            title: "Apex Column Chart",

            js: [
                "https://cdn.jsdelivr.net/npm/apexcharts",
                "https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.11.0/dayjs.min.js",
                "https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.11.0/plugin/quarterOfYear.min.js",
                "/js/apexchart/column/column-initial.js"
            ]
        });
});

app.get('/apex-bar-chart', (req, res) => {
    res.render('apex-bar-chart',
        {
            title: "Apex Bar Chart",

            js: [
                "https://cdn.jsdelivr.net/npm/apexcharts",
                "/js/apexchart/bar/bar-initial.js"
            ]
        });
});

app.get('/apex-mixed-chart', (req, res) => {
    res.render('apex-mixed-chart',
        {
            title: "Apex Mixed Chart",

            js: [
                "https://cdn.jsdelivr.net/npm/apexcharts",
                "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js",
                "/js/apexchart/bar/bar-initial.js",
                "/js/apexchart/mixed/mixed-initial.js"
            ]
        });
});

app.get('/apex-timeline-chart', (req, res) => {
    res.render('apex-timeline-chart',
        {
            title: "Apex Timeline Chart",

            js: [
                "https://cdn.jsdelivr.net/npm/apexcharts",
                "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js",
                "/js/apexchart/timeline/timeline.js"
            ]
        });
});

app.get('/apex-candlestick-chart', (req, res) => {
    res.render('apex-candlestick-chart',
        {
            title: "Apex Candlestick Chart",

            js: [
                "https://cdn.jsdelivr.net/npm/apexcharts",
                "/js/apexchart/ohlc.js",
                "https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.8.17/dayjs.min.js",
                "/js/apexchart/Candlstick/candlstick.js",
            ]
        });
});

app.get('/apex-boxplot-chart', (req, res) => {
    res.render('apex-boxplot-chart',
        {
            title: "Apex Boxplot Chart",

            js: [
                "https://cdn.jsdelivr.net/npm/apexcharts",
                "/js/apexchart/boxplot/boxplot-initial.js"
            ]
        });
});

app.get('/apex-bubble-chart', (req, res) => {
    res.render('apex-bubble-chart',
        {
            title: "Apex Bubble Chart",

            js: [
                "https://cdn.jsdelivr.net/npm/apexcharts",
                "/js/apexchart/bubble/bubble-initial.js"
            ]
        });
});

app.get('/apex-scatter-chart', (req, res) => {
    res.render('apex-scatter-chart',
        {
            title: "Apex Scatter Chart",

            js: [
                "https://cdn.jsdelivr.net/npm/apexcharts",
                "/js/apexchart/scatter/scatter-initial.js"
            ]
        });
});


app.get('/apex-heatmap-chart', (req, res) => {
    res.render('apex-heatmap-chart',
        {
            title: "Apex Heatmap Chart",

            js: [
                "https://cdn.jsdelivr.net/npm/apexcharts",
                "/js/apexchart/heatmap/heatmap-initial.js"
            ]
        });
});

app.get('/apex-treemap-chart', (req, res) => {
    res.render('apex-treemap-chart',
        {
            title: "Apex Treemap Chart",

            js: [
                "https://cdn.jsdelivr.net/npm/apexcharts",
                "/js/apexchart/treemap/treemap-initial.js"
            ]
        });
});

app.get('/apex-pie-chart', (req, res) => {
    res.render('apex-pie-chart',
        {
            title: "Apex Pie Chart",

            js: [
                "https://cdn.jsdelivr.net/npm/apexcharts",
                "/js/apexchart/pie/pie-initial.js"
            ]
        });
});

app.get('/apex-radial-chart', (req, res) => {
    res.render('apex-radial-chart',
        {
            title: "Apex Radial Chart",

            js: [
                "https://cdn.jsdelivr.net/npm/apexcharts",
                "/js/apexchart/radialbar/radial-initial.js"
            ]
        });
});

app.get('/apex-radar-chart', (req, res) => {
    res.render('apex-radar-chart',
        {
            title: "Apex Radar Chart",

            js: [
                "https://cdn.jsdelivr.net/npm/apexcharts",
                "/js/apexchart/radar/radar-initial.js"
            ]
        });
});

app.get('/apex-polar-chart', (req, res) => {
    res.render('apex-polar-chart',
        {
            title: "Apex Polar Chart",

            js: [
                "https://cdn.jsdelivr.net/npm/apexcharts",
                "/js/apexchart/ploar/polar-initial.js"
            ]
        });
});

app.get('/chartjs', (req, res) => {
    res.render('chartjs',
        {
            title: "Chart-Js",

            js: [
                "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js",
                "/js/chartjs/initial-chart.js"
            ]
        });
});

app.get('/amchart-column-bars', (req, res) => {
    res.render('amchart-column-bars',
        {
            title: "Column & Bars",

            js: [
                "https://cdn.amcharts.com/lib/5/index.js",
                "https://cdn.amcharts.com/lib/5/xy.js",
                "https://cdn.amcharts.com/lib/5/themes/Animated.js",

                "/js/amchart/column-bars-init.js"
            ]
        });
});
app.get('/amchart-line-area', (req, res) => {
    res.render('amchart-line-area',
        {
            title: "Line & Area",

            js: [
                "https://cdn.amcharts.com/lib/5/index.js",
                "https://cdn.amcharts.com/lib/5/xy.js",
                "https://cdn.amcharts.com/lib/5/themes/Animated.js",

                "/js/amchart/line-area-init.js"
            ]
        });
});

app.get('/amchart-pie-donut', (req, res) => {
    res.render('amchart-pie-donut',
        {
            title: "Pie & Donut",

            js: [
                "https://cdn.amcharts.com/lib/5/index.js",
                "https://cdn.amcharts.com/lib/5/percent.js",
                "https://cdn.amcharts.com/lib/5/themes/Animated.js",

                "/js/amchart/pie-donut-init.js"
            ]
        });
});


app.get('/amchart-gauges', (req, res) => {
    res.render('amchart-gauges',
        {
            title: "Gauges",

            js: [
                "https://cdn.amcharts.com/lib/5/index.js",
                "https://cdn.amcharts.com/lib/5/xy.js",
                "https://cdn.amcharts.com/lib/5/radar.js",
                "https://cdn.amcharts.com/lib/5/themes/Animated.js",
                "plugins/src/.internal/plugins/json/Classes-script.js",

                "/js/amchart/gauges-init.js"
            ]
        });
});

app.get('/amchart-map', (req, res) => {
    res.render('amchart-map',
        {
            title: "Amchat Map",

            js: [
                "https://cdn.amcharts.com/lib/5/index.js",
                "https://cdn.amcharts.com/lib/5/map.js",
                "https://cdn.amcharts.com/lib/5/geodata/worldLow.js",
                "https://cdn.amcharts.com/lib/5/themes/Animated.js",

                "/js/amchart/amchart-map-init.js"
            ]
        });
});


app.get('/googlemap', (req, res) => {
    res.render('googlemap',
        {
            title: "Google Map",

            js: [
                "https://polyfill.io/v3/polyfill.min.js?features=default",
                "https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly",

                "/js/google-map-init.js"
            ]
        });
});

app.get('/vectormap', (req, res) => {
    res.render('vectormap',
        {
            title: "Vector Map",

            css: [
                "https://cdn.jsdelivr.net/npm/jsvectormap/dist/css/jsvectormap.min.css",
            ],
            js: [
                "https://cdn.jsdelivr.net/npm/jsvectormap",
                "/js/js-vector-map/russia-map.js",
                "/js/js-vector-map/world-merc.js",
                "/js/js-vector-map/spain-map.js",
                "/js/js-vector-map/canada-map.js",
                "/js/js-vector-map/usa-map.js",

                "/js/js-vector-map/jsvector-initial.js"
            ]
        });
});


app.get('/leaflet', (req, res) => {
    res.render('leaflet',
        {
            title: "Leaflet Map",

            css: [
                "https://unpkg.com/leaflet@1.8.0/dist/leaflet.css",
            ],
            js: [
                "https://unpkg.com/leaflet@1.8.0/dist/leaflet.js",

                "js/leaflet/us-state.js",
                "js/leaflet/leaflet-initial.js",
            ]
        });
});


app.listen(PORT, HOST, () => console.log(`Server running at http://${HOST}:${PORT}/`));