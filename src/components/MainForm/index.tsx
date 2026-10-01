import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';

export function MainForm() {
  return (
    <form className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='Digite sua tarefa...'
        />
      </div>

      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        {/* Por que o valor de icon está entre chaves? R = Porque estamos passando um JSX element como prop */}
        <DefaultButton icon={<PlayCircleIcon />} color='green' />
        {/* <DefaultButton icon={<PlayCircleIcon />} color='red'/>    */}
      </div>
    </form>
  );
}
