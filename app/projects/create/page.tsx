'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from '@/components/ui/use-toast'
import { Button } from '@/components/button'
import { Icon } from '@/components/icon'
import { Text } from '@/components/text'
import { Form } from '@/components/form'
import { Input } from '@/components/form/input'
import { Textarea } from '@/components/form/textarea'
import { Select } from '@/components/form/select'
import { FORM_CONFIG } from './form-config'
import { useInit } from './use-init'

const ProjectForm = () => {
  const router = useRouter()
  const {
    store: { form },
    action: { submit },
  } = useInit()

  const goBack = () => router.back()
  const onSubmit = form.handleSubmit(data => {
    toast({
      title: 'you submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })

    submit(data)
  })
  return (
    <Form
      formContorl={form}
      onSubmit={onSubmit}
      className='flex flex-col gap-y-4 p-5'
    >
      {/* Go Back */}
      <Button
        variant='native'
        className='flex items-center gap-x-2'
        onClick={goBack}
      >
        <Icon type='arrow-left' size={20} />
        <span className='text-sm text-zinc-900'>回前頁</span>
      </Button>

      {/* Description */}
      <Text tag='p' className='text-sm text-zinc-500'>
        請填寫專案基本資訊，提交通過審核後將發送 Email 通知聯絡人
      </Text>

      {FORM_CONFIG.map(({ type, label, fieldName, fieldProps }) => {
        switch (type) {
          case 'input': {
            return (
              <Input
                key={fieldName}
                control={form.control}
                fieldName={fieldName}
                label={label}
                fieldProps={fieldProps}
              />
            )
          }
          case 'textarea': {
            return (
              <Textarea
                key={fieldName}
                control={form.control}
                fieldName={fieldName}
                label={label}
                fieldProps={fieldProps}
              />
            )
          }
          case 'select': {
            return (
              <Select
                key={fieldName}
                control={form.control}
                fieldName={fieldName}
                label={label}
                fieldProps={fieldProps}
              />
            )
          }
          default: {
            return null
          }
        }
      })}

      {/* Submit */}
      <div className='flex flex-col justify-center gap-y-2'>
        <Button type='submit'>提交</Button>
        <Text tag='p' className='text-xs' color='zinc-900'>
          提交即代表你同意
          <Link href='#discliamer' className='text-xs text-blue-600'>
            《什麼規則之類的東東》
          </Link>
        </Text>
      </div>
    </Form>
  )
}

export default ProjectForm
