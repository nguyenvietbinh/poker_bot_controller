

export function useMyFunc() {
  const check_account_name = async (account_name: string) => {
    const req = `users/${account_name}/matches`
    return await $fetch('/api/demo', {
        method: 'post',
        body: JSON.stringify({ message: req })
    })
  }


  return {
    check_account_name
  }
}