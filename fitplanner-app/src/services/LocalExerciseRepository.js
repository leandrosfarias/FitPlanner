export class LocalExerciseRepository {
    storageKey = 'exercises';
    async getAll() {
        const exercises = localStorage.getItem(this.storageKey);
        return exercises ? JSON.parse(exercises) : [];
    }
    async getById(id) {
        const exercises = await this.getAll();
        return exercises.find(exercise => exercise.id === id);
    }
    async add(exercise) {
        const exercises = await this.getAll();
        exercises.push(exercise);
        localStorage.setItem(this.storageKey, JSON.stringify(exercises));
    }
    async update(exercise) {
        const exercises = await this.getAll();
        const index = exercises.findIndex(e => e.id === exercise.id);
        if (index !== -1) {
            exercises[index] = exercise;
            localStorage.setItem(this.storageKey, JSON.stringify(exercises));
        }
    }
    async delete(id) {
        const exercises = await this.getAll();
        const updatedExercises = exercises.filter(exercise => exercise.id !== id);
        localStorage.setItem(this.storageKey, JSON.stringify(updatedExercises));
    }
}
//# sourceMappingURL=LocalExerciseRepository.js.map