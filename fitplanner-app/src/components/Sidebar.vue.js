import { ref } from "vue";
import { useRoute } from "vue-router";
const selectedItem = ref("workouts");
const route = useRoute();
const isActive = (path) => route.path === path;
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['item-selected']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.aside, __VLS_elements.aside)({
    ...{ class: "sidebar" },
});
__VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
    ...{ class: "nav-header border-slate" },
});
__VLS_asFunctionalElement(__VLS_elements.nav, __VLS_elements.nav)({
    ...{ class: "flex-1" },
});
__VLS_asFunctionalElement(__VLS_elements.ul, __VLS_elements.ul)({});
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.selectedItem = 'students';
            // @ts-ignore
            [selectedItem,];
        } },
    ...{ class: ({ 'item-selected': __VLS_ctx.isActive('/dashboard/coach/students') }) },
});
// @ts-ignore
[isActive,];
const __VLS_0 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    to: "/dashboard/coach/students",
}));
const __VLS_2 = __VLS_1({
    to: "/dashboard/coach/students",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_4 } = __VLS_3.slots;
__VLS_asFunctionalElement(__VLS_elements.i, __VLS_elements.i)({
    ...{ class: "fas fa-users indigo" },
});
var __VLS_3;
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.selectedItem = 'workouts';
            // @ts-ignore
            [selectedItem,];
        } },
    ...{ class: ({ 'item-selected': __VLS_ctx.isActive('/dashboard/coach/exercises') }) },
});
// @ts-ignore
[isActive,];
const __VLS_5 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    to: "/dashboard/coach/exercises",
}));
const __VLS_7 = __VLS_6({
    to: "/dashboard/coach/exercises",
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
const { default: __VLS_9 } = __VLS_8.slots;
__VLS_asFunctionalElement(__VLS_elements.i, __VLS_elements.i)({
    ...{ class: "fas fa-dumbbell text-orange-400" },
});
var __VLS_8;
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.selectedItem = 'progress';
            // @ts-ignore
            [selectedItem,];
        } },
    ...{ class: ({ 'item-selected': __VLS_ctx.isActive('/coach-dashboard/progress') }) },
});
// @ts-ignore
[isActive,];
const __VLS_10 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({
    to: "/dashboard/coach/progress",
}));
const __VLS_12 = __VLS_11({
    to: "/dashboard/coach/progress",
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
const { default: __VLS_14 } = __VLS_13.slots;
__VLS_asFunctionalElement(__VLS_elements.i, __VLS_elements.i)({
    ...{ class: "fas fa-chart-line text-teal-400" },
});
var __VLS_13;
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.selectedItem = 'settings';
            // @ts-ignore
            [selectedItem,];
        } },
    ...{ class: ({ 'item-selected': __VLS_ctx.isActive('/dashboard/coach/settings') }) },
});
// @ts-ignore
[isActive,];
const __VLS_15 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
    to: "/dashboard/coach/settings",
}));
const __VLS_17 = __VLS_16({
    to: "/dashboard/coach/settings",
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
const { default: __VLS_19 } = __VLS_18.slots;
__VLS_asFunctionalElement(__VLS_elements.i, __VLS_elements.i)({
    ...{ class: "fas fa-cog text-slate-400" },
});
var __VLS_18;
__VLS_asFunctionalElement(__VLS_elements.footer, __VLS_elements.footer)({
    ...{ class: "" },
});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-header']} */ ;
/** @type {__VLS_StyleScopedClasses['border-slate']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['item-selected']} */ ;
/** @type {__VLS_StyleScopedClasses['fas']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-users']} */ ;
/** @type {__VLS_StyleScopedClasses['indigo']} */ ;
/** @type {__VLS_StyleScopedClasses['item-selected']} */ ;
/** @type {__VLS_StyleScopedClasses['fas']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-dumbbell']} */ ;
/** @type {__VLS_StyleScopedClasses['text-orange-400']} */ ;
/** @type {__VLS_StyleScopedClasses['item-selected']} */ ;
/** @type {__VLS_StyleScopedClasses['fas']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-chart-line']} */ ;
/** @type {__VLS_StyleScopedClasses['text-teal-400']} */ ;
/** @type {__VLS_StyleScopedClasses['item-selected']} */ ;
/** @type {__VLS_StyleScopedClasses['fas']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-cog']} */ ;
/** @type {__VLS_StyleScopedClasses['text-slate-400']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        selectedItem: selectedItem,
        isActive: isActive,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Sidebar.vue.js.map