export class Atividade {
    id?: number
    tracker_id?: number
    project_id?: number
    subject?: string
    description?: string
    due_date?: string
    category_id?: number
    status: Status
    assigned_to_id?: number
    priority_id?: number
    author_id?: number
    created_on?: string
    updated_on?: string
    start_date?: string
    done_ratio?: number
    estimated_hours?: number

}

export class Status {
    id?: number
    name?: string
}

export class Projeto {
    id?: number
    name?: string
    identifier?: string
    description?: string
    status?: number
    is_public?: boolean
    created_on?: string
    updated_on?: string
}