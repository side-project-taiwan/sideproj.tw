import { useForm, z, zodResolver } from '@/libs/form'

const FormSchema = z.object({
  name: z.string().min(2, {
    message: 'Project name is required',
  }),
  summary: z.string().min(2, {
    message: 'Project summary is required',
  }),
  thumbnail: z.string().url().optional().or(z.literal('')),
  link: z.string().url({
    message: 'Link must be a valid URL',
  }),
  roles: z.array(z.object({ label: z.string(), value: z.string() })).min(1, {
    message: 'Roles are required',
  }),
  email: z.string().email({
    message: 'Email must be a valid email',
  }),
})

type FormSchemaType = z.infer<typeof FormSchema>

export const useInit = () => {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      summary: '',
      thumbnail: '',
      link: '',
      roles: [],
      email: '',
    },
  })

  const submit = (data: FormSchemaType) => {
    // TODO: send data to discord channel
    // eslint-disable-next-line no-console
    console.log(data)
  }

  return { store: { form }, action: { submit } }
}
