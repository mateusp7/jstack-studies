import { Button } from "@/components/ui/button";
import { useReducer } from "react";

type User = {
  user: {
    id: number;
    age: number;
    name: string;
  };
  isUnderage: boolean;
};

type Action =
  | { type: "changeUser" }
  | { type: "updateAge"; payload: { age: number } };

function reducer(prevState: User, action: Action) {
  switch (action.type) {
    case "changeUser": {
      const age = 57;

      return {
        isUnderage: age < 18,
        user: {
          id: Date.now(),
          age,
          name: "José",
        },
      };
    }
    case 'updateAge': {
      const age = action.payload.age;

      return {
        ...prevState,
        user: {
          ...prevState.user,
          age,
        },
        isUnderage: age < 18,
      };
    }
    default:
      return prevState
  }
}

export const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    user: {
      id: Date.now(),
      name: "Mateus Paulo",
      age: 24,
    },
    isUnderage: false,
  });

  function handleChangeUser() {
    dispatch({
      type: "changeUser",
    });
  }

  function handleRefreshAge() {
    const ages = [15, 12, 18, 14, 22, 23];
    const age = ages[Math.floor(Math.random() * ages.length)];

    dispatch({
      type: "updateAge",
      payload: {
        age,
      },
    });
  }

  return (
    <div>
      <h1>Usuário: {state?.user.name}</h1>
      <h1>Idade: {state?.user.age}</h1>
      <h1>Menor de Idade: {state?.isUnderage ? "Sim" : "Não"}</h1>
      <div className="space-x-1">
        <Button onClick={handleChangeUser}>Trocar usuário</Button>
        <Button onClick={handleRefreshAge}>Atualizar idade</Button>
      </div>
    </div>
  );
};
