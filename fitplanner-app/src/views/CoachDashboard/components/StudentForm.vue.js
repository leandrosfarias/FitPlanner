import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import InputMask from 'primevue/inputmask';
import Button from 'primevue/button';
import Select from 'primevue/select';
import DatePicker from 'primevue/datepicker';
import Textarea from 'primevue/textarea';
import { useRouter } from 'vue-router';
import { ref, watchEffect } from 'vue';
import { LocalStudentRepository } from '../../../services/LocalStudentRepository';
import { v4 as uuidv4 } from 'uuid';
const router = useRouter();
const studentRepository = new LocalStudentRepository();
const studentName = ref('');
const studentEmail = ref('');
const studentPhone = ref('');
const studentWeight = ref(null);
const studentHeight = ref(null);
const studentBirthDate = ref(null);
const studentObservations = ref(null);
const studentGoal = ref(null);
const selectedGender = ref(null);
const goals = [
    { label: 'Emagrecimento', value: 'Emagrecimento' },
    { label: 'Hipertrofia', value: 'Hipertrofia' },
    { label: 'Definição Muscular', value: 'Definição Muscular' },
    { label: 'Aumento de Força', value: 'Aumento de Força' },
    { label: 'Melhora de Performance', value: 'Melhora de Performance' }
];
const genderOptions = [
    { label: 'Masculino', value: 'Masculino' },
    { label: 'Feminino', value: 'Feminino' },
    { label: 'Outro', value: 'Outro' }
];
const disabledButton = ref(true);
watchEffect(() => {
    // Habilita o botão apenas se os campos obrigatórios estiverem preenchidos
    disabledButton.value = !studentName.value || !studentEmail.value || studentWeight.value === null || studentHeight.value === null || studentBirthDate.value === null || studentGoal.value === null || selectedGender.value === null;
});
async function saveStudent() {
    const newStudent = {
        id: uuidv4(),
        name: studentName.value,
        email: studentEmail.value,
        phone: studentPhone.value,
        weight: studentWeight.value ?? 0,
        height: studentHeight.value ?? 0,
        birthDate: studentBirthDate.value?.toISOString() ?? '',
        createdAt: new Date(),
        gender: { value: selectedGender.value },
        observations: studentObservations.value,
        goal: { value: studentGoal.value },
        status: 'Ativo',
        hasTrainingPlan: false,
    };
    await studentRepository.add(newStudent);
    // Após salvar, redireciona para a tela de alunos
    router.push({ path: '/dashboard/coach/students' });
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['header-form']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['input-row']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
    ...{ class: "form-section" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "form-card" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "header-form" },
});
__VLS_asFunctionalElement(__VLS_elements.h4, __VLS_elements.h4)({});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "form-content" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "form-group" },
});
__VLS_asFunctionalElement(__VLS_elements.h5, __VLS_elements.h5)({});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "input-row" },
});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    ...{ class: "input-label" },
});
const __VLS_0 = {}.InputText;
/** @type {[typeof __VLS_components.InputText, ]} */ ;
// @ts-ignore
InputText;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    modelValue: (__VLS_ctx.studentName),
    placeholder: "ex: Leandro Farinha",
    type: "text",
    fluid: true,
}));
const __VLS_2 = __VLS_1({
    modelValue: (__VLS_ctx.studentName),
    placeholder: "ex: Leandro Farinha",
    type: "text",
    fluid: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
// @ts-ignore
[studentName,];
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    ...{ class: "input-label" },
});
const __VLS_5 = {}.InputText;
/** @type {[typeof __VLS_components.InputText, ]} */ ;
// @ts-ignore
InputText;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    modelValue: (__VLS_ctx.studentEmail),
    placeholder: "ex: leandro@email.com",
    type: "email",
    fluid: true,
}));
const __VLS_7 = __VLS_6({
    modelValue: (__VLS_ctx.studentEmail),
    placeholder: "ex: leandro@email.com",
    type: "email",
    fluid: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
// @ts-ignore
[studentEmail,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "input-row" },
});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    ...{ class: "input-label" },
});
const __VLS_10 = {}.InputMask;
/** @type {[typeof __VLS_components.InputMask, ]} */ ;
// @ts-ignore
InputMask;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({
    modelValue: (__VLS_ctx.studentPhone),
    placeholder: "ex: (11) 99999-9999",
    mask: "(99) 99999-9999",
    fluid: true,
}));
const __VLS_12 = __VLS_11({
    modelValue: (__VLS_ctx.studentPhone),
    placeholder: "ex: (11) 99999-9999",
    mask: "(99) 99999-9999",
    fluid: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
// @ts-ignore
[studentPhone,];
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    ...{ class: "input-label" },
});
const __VLS_15 = {}.DatePicker;
/** @type {[typeof __VLS_components.DatePicker, ]} */ ;
// @ts-ignore
DatePicker;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
    modelValue: (__VLS_ctx.studentBirthDate),
    placeholder: "Data de Nascimento",
    ...{ class: "p-datepicker" },
    fluid: true,
}));
const __VLS_17 = __VLS_16({
    modelValue: (__VLS_ctx.studentBirthDate),
    placeholder: "Data de Nascimento",
    ...{ class: "p-datepicker" },
    fluid: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
// @ts-ignore
[studentBirthDate,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "form-group" },
});
__VLS_asFunctionalElement(__VLS_elements.h5, __VLS_elements.h5)({});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "input-row" },
});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    ...{ class: "input-label" },
});
const __VLS_20 = {}.InputNumber;
/** @type {[typeof __VLS_components.InputNumber, ]} */ ;
// @ts-ignore
InputNumber;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    modelValue: (__VLS_ctx.studentWeight),
    placeholder: "Peso",
    mode: "decimal",
    fluid: true,
    minFractionDigits: (2),
    maxFractionDigits: (5),
}));
const __VLS_22 = __VLS_21({
    modelValue: (__VLS_ctx.studentWeight),
    placeholder: "Peso",
    mode: "decimal",
    fluid: true,
    minFractionDigits: (2),
    maxFractionDigits: (5),
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
// @ts-ignore
[studentWeight,];
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    ...{ class: "input-label" },
});
const __VLS_25 = {}.InputNumber;
/** @type {[typeof __VLS_components.InputNumber, ]} */ ;
// @ts-ignore
InputNumber;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
    modelValue: (__VLS_ctx.studentHeight),
    placeholder: "Altura",
    mode: "decimal",
    fluid: true,
    minFractionDigits: (2),
    maxFractionDigits: (5),
}));
const __VLS_27 = __VLS_26({
    modelValue: (__VLS_ctx.studentHeight),
    placeholder: "Altura",
    mode: "decimal",
    fluid: true,
    minFractionDigits: (2),
    maxFractionDigits: (5),
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
// @ts-ignore
[studentHeight,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "input-row" },
});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    ...{ class: "input-label" },
});
const __VLS_30 = {}.Select;
/** @type {[typeof __VLS_components.Select, ]} */ ;
// @ts-ignore
Select;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({
    modelValue: (__VLS_ctx.selectedGender),
    options: (__VLS_ctx.genderOptions),
    optionLabel: "label",
    placeholder: "Selecione um Gênero",
    fluid: true,
}));
const __VLS_32 = __VLS_31({
    modelValue: (__VLS_ctx.selectedGender),
    options: (__VLS_ctx.genderOptions),
    optionLabel: "label",
    placeholder: "Selecione um Gênero",
    fluid: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
// @ts-ignore
[selectedGender, genderOptions,];
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    ...{ class: "input-label" },
});
const __VLS_35 = {}.Select;
/** @type {[typeof __VLS_components.Select, ]} */ ;
// @ts-ignore
Select;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({
    modelValue: (__VLS_ctx.studentGoal),
    options: (__VLS_ctx.goals),
    optionLabel: "label",
    placeholder: "Selecione um Objetivo",
    fluid: true,
}));
const __VLS_37 = __VLS_36({
    modelValue: (__VLS_ctx.studentGoal),
    options: (__VLS_ctx.goals),
    optionLabel: "label",
    placeholder: "Selecione um Objetivo",
    fluid: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_36));
// @ts-ignore
[studentGoal, goals,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "input-row-single" },
});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    ...{ class: "input-label" },
});
const __VLS_40 = {}.Textarea;
/** @type {[typeof __VLS_components.Textarea, ]} */ ;
// @ts-ignore
Textarea;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
    modelValue: (__VLS_ctx.studentObservations),
    placeholder: "ex: Tem a coluna torta",
    rows: "3",
    fluid: true,
}));
const __VLS_42 = __VLS_41({
    modelValue: (__VLS_ctx.studentObservations),
    placeholder: "ex: Tem a coluna torta",
    rows: "3",
    fluid: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
// @ts-ignore
[studentObservations,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "container-button" },
});
const __VLS_45 = {}.Button;
/** @type {[typeof __VLS_components.Button, ]} */ ;
// @ts-ignore
Button;
// @ts-ignore
const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({
    ...{ 'onClick': {} },
    label: "Salvar Aluno",
    ...{ class: "btn-primary" },
    disabled: (__VLS_ctx.disabledButton),
}));
const __VLS_47 = __VLS_46({
    ...{ 'onClick': {} },
    label: "Salvar Aluno",
    ...{ class: "btn-primary" },
    disabled: (__VLS_ctx.disabledButton),
}, ...__VLS_functionalComponentArgsRest(__VLS_46));
let __VLS_49;
let __VLS_50;
const __VLS_51 = ({ click: {} },
    { onClick: (__VLS_ctx.saveStudent) });
// @ts-ignore
[disabledButton, saveStudent,];
var __VLS_48;
/** @type {__VLS_StyleScopedClasses['form-section']} */ ;
/** @type {__VLS_StyleScopedClasses['form-card']} */ ;
/** @type {__VLS_StyleScopedClasses['header-form']} */ ;
/** @type {__VLS_StyleScopedClasses['form-content']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['input-row']} */ ;
/** @type {__VLS_StyleScopedClasses['input-label']} */ ;
/** @type {__VLS_StyleScopedClasses['input-label']} */ ;
/** @type {__VLS_StyleScopedClasses['input-row']} */ ;
/** @type {__VLS_StyleScopedClasses['input-label']} */ ;
/** @type {__VLS_StyleScopedClasses['input-label']} */ ;
/** @type {__VLS_StyleScopedClasses['p-datepicker']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['input-row']} */ ;
/** @type {__VLS_StyleScopedClasses['input-label']} */ ;
/** @type {__VLS_StyleScopedClasses['input-label']} */ ;
/** @type {__VLS_StyleScopedClasses['input-row']} */ ;
/** @type {__VLS_StyleScopedClasses['input-label']} */ ;
/** @type {__VLS_StyleScopedClasses['input-label']} */ ;
/** @type {__VLS_StyleScopedClasses['input-row-single']} */ ;
/** @type {__VLS_StyleScopedClasses['input-label']} */ ;
/** @type {__VLS_StyleScopedClasses['container-button']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        InputText: InputText,
        InputNumber: InputNumber,
        InputMask: InputMask,
        Button: Button,
        Select: Select,
        DatePicker: DatePicker,
        Textarea: Textarea,
        studentName: studentName,
        studentEmail: studentEmail,
        studentPhone: studentPhone,
        studentWeight: studentWeight,
        studentHeight: studentHeight,
        studentBirthDate: studentBirthDate,
        studentObservations: studentObservations,
        studentGoal: studentGoal,
        selectedGender: selectedGender,
        goals: goals,
        genderOptions: genderOptions,
        disabledButton: disabledButton,
        saveStudent: saveStudent,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=StudentForm.vue.js.map