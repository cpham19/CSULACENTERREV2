import Api from '@/services/Api'

export default {
    getAssignments() {
        return Api().get('assignment')
    },
    getAssignment(assingmentId) {
        return Api().get(`assignment/${assingmentId}`)
    },
    postAssignment(assignment) {
        return Api().post('assignment/post', assignment)
    },
}