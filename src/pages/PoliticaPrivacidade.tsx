import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { seoConfig } from "@/config/seo";

const PoliticaPrivacidade = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="max-w-3xl mx-auto px-6 py-16">
                {/* Back Button */}
                <Link to="/">
                    <Button variant="ghost" className="mb-8 text-gold hover:text-gold/80">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Voltar
                    </Button>
                </Link>

                <h1 className="text-4xl font-black text-gold mb-8">Política de Privacidade</h1>

                <div className="prose prose-invert prose-gold max-w-none space-y-6 text-foreground/80">
                    <p className="text-muted-foreground">
                        Última atualização: {new Date().toLocaleDateString('pt-BR')}
                    </p>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Introdução</h2>
                        <p>
                            A {seoConfig.siteName} está comprometida em proteger sua privacidade. Esta política descreve
                            como coletamos, usamos e protegemos suas informações pessoais.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Informações Coletadas</h2>
                        <p>Podemos coletar as seguintes informações:</p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li><strong>Dados de cadastro:</strong> nome, e-mail, telefone</li>
                            <li><strong>Dados de pagamento:</strong> processados de forma segura pela Kiwify</li>
                            <li><strong>Dados de uso:</strong> interações com a plataforma, preferências</li>
                            <li><strong>Dados técnicos:</strong> endereço IP, tipo de navegador, dispositivo</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Como Usamos Suas Informações</h2>
                        <p>Utilizamos suas informações para:</p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>Fornecer acesso à comunidade e seus recursos</li>
                            <li>Processar pagamentos e gerenciar assinaturas</li>
                            <li>Enviar comunicações sobre o serviço</li>
                            <li>Melhorar a experiência do usuário</li>
                            <li>Cumprir obrigações legais</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Compartilhamento de Dados</h2>
                        <p>
                            Não vendemos suas informações pessoais. Podemos compartilhar dados apenas com:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>Processadores de pagamento (Kiwify)</li>
                            <li>Ferramentas de análise e marketing</li>
                            <li>Autoridades legais, quando exigido por lei</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Cookies e Tecnologias</h2>
                        <p>
                            Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência,
                            analisar tráfego e personalizar conteúdo.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Segurança</h2>
                        <p>
                            Implementamos medidas de segurança técnicas e organizacionais para proteger suas
                            informações contra acesso não autorizado, alteração ou destruição.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Seus Direitos (LGPD)</h2>
                        <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>Acessar seus dados pessoais</li>
                            <li>Corrigir dados incompletos ou desatualizados</li>
                            <li>Solicitar a exclusão de seus dados</li>
                            <li>Revogar o consentimento</li>
                            <li>Portabilidade dos dados</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Retenção de Dados</h2>
                        <p>
                            Mantemos suas informações enquanto sua conta estiver ativa ou conforme necessário
                            para cumprir obrigações legais e resolver disputas.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Contato</h2>
                        <p>
                            Para exercer seus direitos ou esclarecer dúvidas sobre privacidade,
                            entre em contato através das nossas redes sociais ou canais oficiais.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PoliticaPrivacidade;
