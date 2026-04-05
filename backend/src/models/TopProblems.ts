// TopProblems Model
// This file contains the model for representing the top problems related to waste management.

interface TopProblem {
    id: number;
    title: string;
    description: string;
    severity: string; // e.g., 'low', 'medium', 'high'
    dateReported: Date;
}

export default TopProblem;