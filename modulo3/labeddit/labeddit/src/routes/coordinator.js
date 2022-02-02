export const goToHomeLogin = (history) => {
    history.push("/login")
}

export const goToSignUp = (history) => {
    history.push("/cadastro")
}

export const goToFeed = (history) => {
    history.push("/")
}

export const goToAddPost = (history) => {
    history.push("/adicionar-post")
}

export const goToDetailsPost = (history) => {
    history.push(`/ver-post/${id}`)
}