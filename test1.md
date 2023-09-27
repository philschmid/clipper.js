![](https://huggingface.co/datasets/trl-internal-testing/example-images/resolve/main/images/trl_banner_dark.png)

## TRL - Transformer Reinforcement Learning

TRL is a full stack library where we provide a set of tools to train transformer language models with Reinforcement Learning, from the Supervised Fine-tuning step (SFT), Reward Modeling step (RM) to the Proximal Policy Optimization (PPO) step. The library is integrated with 🤗 [transformers](https://github.com/huggingface/transformers).

![](https://huggingface.co/datasets/trl-internal-testing/example-images/resolve/main/images/TRL-readme.png)

Check the appropriate sections of the documentation depending on your needs:

## API documentation

-   [Model Classes](https://huggingface.co/docs/trl/models): _A brief overview of what each public model class does._
-   [`SFTTrainer`](https://huggingface.co/docs/trl/sft_trainer): _Supervise Fine-tune your model easily with `SFTTrainer`_
-   [`RewardTrainer`](https://huggingface.co/docs/trl/reward_trainer): _Train easily your reward model using `RewardTrainer`._
-   [`PPOTrainer`](https://huggingface.co/docs/trl/trainer): _Further fine-tune the supervised fine-tuned model using PPO algorithm_
-   [Best-of-N Sampling](https://huggingface.co/docs/trl/best-of-n): _Use best of n sampling as an alternative way to sample predictions from your active model_
-   [`DPOTrainer`](https://huggingface.co/docs/trl/trainer): _Direct Preference Optimization training using `DPOTrainer`._
-   [`TextEnvironment`](https://huggingface.co/docs/trl/text_environment): _Text environment to train your model using tools with RL._

## Examples

-   [Sentiment Tuning](https://huggingface.co/docs/trl/sentiment_tuning): _Fine tune your model to generate positive movie contents_
-   [Training with PEFT](https://huggingface.co/docs/trl/lora_tuning_peft): _Memory efficient RLHF training using adapters with PEFT_
-   [Detoxifying LLMs](https://huggingface.co/docs/trl/detoxifying_a_lm): _Detoxify your language model through RLHF_
-   [StackLlama](https://huggingface.co/docs/trl/using_llama_models): _End-to-end RLHF training of a Llama model on Stack exchange dataset_
-   [Learning with Tools](https://huggingface.co/docs/trl/learning_tools): _Walkthrough of using `TextEnvironments`_
-   [Multi-Adapter Training](https://huggingface.co/docs/trl/multi_adapter_rl): _Use a single base model and multiple adapters for memory efficient end-to-end training_

## Blog posts